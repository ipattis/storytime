import * as webllm from "https://esm.run/@mlc-ai/web-llm";
import { KokoroTTS } from "https://esm.sh/kokoro-js@1.0.1";
import { illustrations, defaultIllustration } from "./illustrations.js";

// Ensure WebLLM is set up correctly
let engine = null;
let ttsEngine = null;

// UI Elements
const promptInput = document.getElementById('story-prompt');
const generateBtn = document.getElementById('generate-btn');
const statusText = document.getElementById('status-text');
const statusIndicator = document.querySelector('.status-indicator');
const progressContainer = document.getElementById('progress-container');
const progressFill = document.getElementById('progress-fill');
const resultSection = document.getElementById('result-section');
const storyContent = document.getElementById('story-content');
const playBtn = document.getElementById('play-btn');
const voiceSelect = document.getElementById('voice-select');
const waveform = document.getElementById('waveform');
const illustLayerA = document.getElementById('illust-layer-a');
const illustLayerB = document.getElementById('illust-layer-b');
const sceneIllustration = document.getElementById('scene-illustration');

// State
let isModelsLoaded = false;
let audioContext = null;
let currentStoryText = "";
let generatedAudioBuffer = null;
let isPlaying = false;
let currentSource = null;

// Illustration sync state
let sentenceTimings = [];
let activeLayer = 'a'; // which layer is currently visible
let currentIllustrationId = null;
let syncAnimFrameId = null;
let playbackStartTime = 0;

// Llama/Qwen Model Selection (Small, fast instructor model optimized for WebGPU)
const LLM_MODEL_ID = "Qwen2.5-1.5B-Instruct-q4f16_1-MLC";

// TTS System Prompt Setup
const SYSTEM_PROMPT = `You are a magical storyteller. You write enchanting, whimsical, and calming bedtime stories for children.
Always output ONLY the story. No conversation, no 'Here is your story', just the story itself.
Keep the language simple, gentle, and rhythmic. The story should be about 3-5 paragraphs long (roughly 200-300 words).`;

// --- Illustration Matching ---
function matchIllustration(sentence) {
    const lower = sentence.toLowerCase();
    for (const illust of illustrations) {
        for (const keyword of illust.keywords) {
            const regex = new RegExp(`\\b${keyword}\\b`, 'i');
            if (regex.test(lower)) {
                return illust.id;
            }
        }
    }
    return null;
}

function getIllustrationSvg(id) {
    const illust = illustrations.find(i => i.id === id);
    return illust ? illust.svg : null;
}

function transitionIllustration(illustrationId) {
    if (illustrationId === currentIllustrationId) return;
    currentIllustrationId = illustrationId;

    const svg = getIllustrationSvg(illustrationId);
    if (!svg) return;

    // Determine which layer is hidden (the one to load new content into)
    const incomingLayer = activeLayer === 'a' ? illustLayerB : illustLayerA;
    const outgoingLayer = activeLayer === 'a' ? illustLayerA : illustLayerB;

    // Set new SVG on the hidden layer
    incomingLayer.innerHTML = svg;

    // Crossfade: activate incoming, deactivate outgoing
    incomingLayer.classList.add('active');
    outgoingLayer.classList.remove('active');

    // Swap active tracker
    activeLayer = activeLayer === 'a' ? 'b' : 'a';
}

// --- LLM Initialization ---
async function initLLM(progressCallback) {
    if (engine) return engine;
    console.log("Initializing WebLLM Engine...");

    const appConfig = webllm.prebuiltAppConfig;
    engine = await webllm.CreateMLCEngine(
        LLM_MODEL_ID,
        {
            initProgressCallback: progressCallback,
            appConfig: appConfig
        }
    );
    return engine;
}

// --- TTS Initialization (Kokoro) ---
async function initTTS(progressCallback) {
    if (ttsEngine) return ttsEngine;
    console.log("Initializing Kokoro TTS...");

    ttsEngine = await KokoroTTS.from_pretrained("onnx-community/Kokoro-82M-v1.0-ONNX", {
        dtype: "q8", // 8-bit quantization for smaller download
        device: "wasm", // CPU execution (WebGPU has kernel compatibility issues)
        progress_callback: progressCallback
    });
    return ttsEngine;
}

// Update UI Loading State
function updateProgress(message, pct, showProgress = true) {
    statusText.textContent = message;
    statusIndicator.className = 'status-indicator loading';

    if (showProgress) {
        progressContainer.style.display = 'block';
        if (pct !== null) {
            progressFill.style.width = `${pct}%`;
        }
    } else {
        progressContainer.style.display = 'none';
    }
}

function setReadyState() {
    isModelsLoaded = true;
    statusText.textContent = "Models loaded and ready.";
    statusIndicator.className = 'status-indicator ready';
    progressContainer.style.display = 'none';
    generateBtn.disabled = false;
}

// --- Audio-synced illustration controller ---
function startIllustrationSync(sampleRate) {
    playbackStartTime = audioContext.currentTime;
    currentIllustrationId = null;

    function syncLoop() {
        if (!isPlaying) return;

        const elapsed = audioContext.currentTime - playbackStartTime;
        const currentSample = elapsed * sampleRate;

        // Find which sentence is active
        let matchedIllustration = null;
        for (const timing of sentenceTimings) {
            if (currentSample >= timing.startSample && currentSample < timing.endSample) {
                matchedIllustration = timing.illustration;
                break;
            }
        }

        // If current sentence has a match and it's different, transition
        if (matchedIllustration && matchedIllustration !== currentIllustrationId) {
            transitionIllustration(matchedIllustration);
        } else if (!matchedIllustration && !currentIllustrationId) {
            // Nothing has matched yet, show default
            transitionIllustration(defaultIllustration);
        }
        // If matchedIllustration is null but we already have one showing, keep it

        syncAnimFrameId = requestAnimationFrame(syncLoop);
    }

    syncAnimFrameId = requestAnimationFrame(syncLoop);
}

function stopIllustrationSync() {
    if (syncAnimFrameId) {
        cancelAnimationFrame(syncAnimFrameId);
        syncAnimFrameId = null;
    }
}

function hideIllustrations() {
    illustLayerA.classList.remove('active');
    illustLayerB.classList.remove('active');
    currentIllustrationId = null;
}

const brushTeethSvg = `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="brush-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#0b0f19"/>
            <stop offset="100%" stop-color="#1a1a3e"/>
        </linearGradient>
        <linearGradient id="brush-paste" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="white"/>
            <stop offset="100%" stop-color="#7ec8e3"/>
        </linearGradient>
    </defs>
    <rect width="400" height="250" fill="url(#brush-bg)"/>
    <!-- Handle -->
    <rect x="40" y="112" width="180" height="16" rx="8" fill="#9d4edd"/>
    <rect x="40" y="116" width="180" height="5" rx="2" fill="#e0aaff" opacity="0.3"/>
    <!-- Neck -->
    <rect x="220" y="115" width="50" height="10" rx="3" fill="#7ec8e3"/>
    <!-- Bristle head -->
    <rect x="270" y="108" width="70" height="24" rx="5" fill="white" opacity="0.9"/>
    <!-- Bristle rows -->
    <rect x="278" y="110" width="4" height="8" rx="1" fill="#e0aaff" opacity="0.6"/>
    <rect x="286" y="110" width="4" height="9" rx="1" fill="#e0aaff" opacity="0.7"/>
    <rect x="294" y="110" width="4" height="8" rx="1" fill="#e0aaff" opacity="0.6"/>
    <rect x="302" y="110" width="4" height="9" rx="1" fill="#e0aaff" opacity="0.7"/>
    <rect x="310" y="110" width="4" height="8" rx="1" fill="#e0aaff" opacity="0.6"/>
    <rect x="318" y="110" width="4" height="9" rx="1" fill="#e0aaff" opacity="0.7"/>
    <rect x="326" y="110" width="4" height="8" rx="1" fill="#e0aaff" opacity="0.6"/>
    <!-- Toothpaste blob on top -->
    <path d="M275 108 Q280 85 295 90 Q310 80 320 88 Q335 82 340 95 Q345 105 340 108" fill="url(#brush-paste)" opacity="0.9"/>
    <!-- Sparkles -->
    <polygon points="350,80 352,75 354,80 352,82" fill="#fbd38d" opacity="0.8"/>
    <polygon points="265,78 267,73 269,78 267,80" fill="#fbd38d" opacity="0.7"/>
    <circle cx="355" cy="100" r="1.5" fill="#e0aaff" opacity="0.5"/>
    <!-- Text -->
    <text x="200" y="170" text-anchor="middle" font-family="Outfit, sans-serif" font-size="16" font-weight="600" fill="#e0aaff" opacity="0.9">Time to brush your teeth!</text>
    <text x="200" y="192" text-anchor="middle" font-family="Outfit, sans-serif" font-size="12" fill="#9d4edd" opacity="0.7">Your story will be ready soon...</text>
</svg>`;

function showBrushTeeth() {
    const incomingLayer = activeLayer === 'a' ? illustLayerB : illustLayerA;
    const outgoingLayer = activeLayer === 'a' ? illustLayerA : illustLayerB;
    incomingLayer.innerHTML = brushTeethSvg;
    incomingLayer.classList.add('active');
    outgoingLayer.classList.remove('active');
    activeLayer = activeLayer === 'a' ? 'b' : 'a';
    currentIllustrationId = '__brush_teeth__';
}

function hideBrushTeeth() {
    illustLayerA.classList.remove('active');
    illustLayerB.classList.remove('active');
    currentIllustrationId = null;
}

// --- Audio Playback ---
function playAudio(audioData, sampleRate) {
    if (isPlaying) {
        stopAudio();
    }

    // Convert Float32Array to AudioBuffer
    const buffer = audioContext.createBuffer(1, audioData.length, sampleRate);
    buffer.getChannelData(0).set(audioData);

    currentSource = audioContext.createBufferSource();
    currentSource.buffer = buffer;
    currentSource.connect(audioContext.destination);

    currentSource.onended = () => {
        isPlaying = false;
        playBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';
        waveform.classList.remove('playing');
        stopIllustrationSync();
        hideIllustrations();
    };

    currentSource.start(0);
    isPlaying = true;
    playBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>';
    waveform.classList.add('playing');

    // Start illustration sync with audio
    if (sentenceTimings.length > 0) {
        startIllustrationSync(sampleRate);
    }
}

function stopAudio() {
    if (currentSource) {
        currentSource.stop();
        currentSource.disconnect();
        currentSource = null;
    }
    isPlaying = false;
    playBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';
    waveform.classList.remove('playing');
    stopIllustrationSync();
    hideIllustrations();
}

// --- Preview illustration during text generation ---
function previewIllustrationFromText(text) {
    // Extract completed sentences from streamed text
    const sentences = text.match(/[^.!?]+[.!?]+/g);
    if (!sentences) return;

    // Check the most recent sentence for a keyword match
    for (let i = sentences.length - 1; i >= 0; i--) {
        const match = matchIllustration(sentences[i]);
        if (match) {
            transitionIllustration(match);
            return;
        }
    }
}

// --- Main Generation Flow ---
async function generateStory() {
    const promptText = promptInput.value.trim();
    if (!promptText) {
        alert("Please enter a hint for the story!");
        return;
    }

    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 24000 });
    } else if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    generateBtn.disabled = true;
    resultSection.classList.add('active');
    storyContent.innerHTML = "<em>Summoning the magic... (Generating story)</em>";
    playBtn.disabled = true;
    generatedAudioBuffer = null;
    sentenceTimings = [];
    currentIllustrationId = null;

    // Reset illustration layers
    sceneIllustration.classList.remove('visible');
    illustLayerA.innerHTML = '';
    illustLayerB.innerHTML = '';
    illustLayerA.classList.remove('active');
    illustLayerB.classList.remove('active');
    activeLayer = 'a';

    try {
        // 1. Ensure models are loaded
        if (!engine) {
            updateProgress("Loading Language Model (Qwen)...", 0);
            await initLLM((report) => {
                if (report.progress) {
                    // LLM progress is 0.0 to 1.0. Let's map it 0-50% for overall
                    updateProgress(`Loading Qwen: ${report.text}`, Math.round(report.progress * 50));
                }
            });
        }

        if (!ttsEngine) {
            updateProgress("Loading Text-to-Speech Model (Kokoro)...", 50);
            await initTTS((x) => {
                if (x.status === 'progress') {
                    // Map TTS to 50-100%
                    const ttspct = Math.round(50 + (x.progress * 0.5));
                    updateProgress(`Loading Kokoro: ${x.file}`, ttspct);
                }
            });
        }

        setReadyState();
        updateProgress("Generating Story...", null, false);
        generateBtn.innerHTML = '<span>Crafting words...</span>';

        // 2. Generate Story Text via WebLLM
        const request = {
            stream: true,
            temperature: 0.7,
            max_tokens: 500,
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `Write a bedtime story about: ${promptText}` }
            ]
        };

        const asyncChunkGenerator = await engine.chat.completions.create(request);
        let completeText = "";

        // Clear placeholder
        storyContent.innerHTML = "";

        for await (const chunk of asyncChunkGenerator) {
            if (chunk.choices[0]?.delta?.content) {
                const textChunk = chunk.choices[0].delta.content;
                completeText += textChunk;
                // Basic markdown to HTML handling for line breaks
                storyContent.innerHTML = completeText.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');

            }
        }

        currentStoryText = completeText;

        // 3. Generate Audio via Kokoro TTS — show brush teeth reminder
        sceneIllustration.classList.add('visible');
        showBrushTeeth();
        generateBtn.innerHTML = '<span>Recording voice...</span>';

        const selectedSpeaker = voiceSelect.value;

        // Kokoro expects a single text block, but we stream it out for memory efficiency
        // Let's grab the sentences
        const sentences = currentStoryText.match(/[^.!?]+[.!?]+/g) || [currentStoryText];
        const validSentences = sentences.filter(s => s.trim().length > 0);
        const totalSentences = validSentences.length;

        let allAudio = [];
        let sr = 24000; // Kokoro default sample rate
        let sampleOffset = 0;
        let ttsStartTime = performance.now();
        let sentencesProcessed = 0;

        // Show progress bar for TTS synthesis
        updateProgress(`Synthesizing Audio... (0/${totalSentences} sentences)`, 0);

        for (const sentence of validSentences) {
            // Yield to browser so DOM updates paint before WASM blocks the thread
            await new Promise(r => setTimeout(r, 0));

            // Generate audio block using Kokoro
            const out = await ttsEngine.generate(sentence.trim(), {
                voice: selectedSpeaker,
            });

            sentencesProcessed++;
            const pct = Math.round((sentencesProcessed / totalSentences) * 100);
            const elapsedMs = performance.now() - ttsStartTime;
            const avgMsPerSentence = elapsedMs / sentencesProcessed;
            const remainingSentences = totalSentences - sentencesProcessed;
            const estRemainingS = Math.ceil((avgMsPerSentence * remainingSentences) / 1000);

            if (remainingSentences > 0) {
                updateProgress(
                    `Synthesizing Audio... (${sentencesProcessed}/${totalSentences}) ~${estRemainingS}s remaining`,
                    pct
                );
            } else {
                updateProgress(`Synthesizing Audio... Done!`, 100);
            }

            const illustration = matchIllustration(sentence);
            sentenceTimings.push({
                sentence: sentence.trim(),
                startSample: sampleOffset,
                endSample: sampleOffset + out.audio.length,
                illustration: illustration
            });

            allAudio.push(out.audio);
            sampleOffset += out.audio.length;
        }

        // Concatenate all audio arrays
        const totalLength = allAudio.reduce((acc, a) => acc + a.length, 0);
        const combinedAudio = new Float32Array(totalLength);
        let offset = 0;
        for (const a of allAudio) {
            combinedAudio.set(a, offset);
            offset += a.length;
        }

        generatedAudioBuffer = { audio: combinedAudio, sampleRate: sr };
        playBtn.disabled = false;
        hideBrushTeeth();

        updateProgress("Story Ready.", null, false);
        generateBtn.innerHTML = '<span>Generate Another Story</span>';
        generateBtn.disabled = false;

    } catch (err) {
        console.error("Error generating story:", err);
        updateProgress("Error occurred.", null, false);
        statusIndicator.className = 'status-indicator error';
        statusText.textContent = "Error: " + err.message;
        generateBtn.innerHTML = '<span>Try Again</span>';
        generateBtn.disabled = false;
    }
}

// Event Listeners
generateBtn.addEventListener('click', generateStory);

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        stopAudio();
    } else if (generatedAudioBuffer) {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 24000 });
        } else if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
        // Reset illustration state so sync restarts fresh
        currentIllustrationId = null;
        playAudio(generatedAudioBuffer.audio, generatedAudioBuffer.sampleRate);
    }
});
