# Storytime

A bedtime story generator that runs entirely in your browser. Type a prompt, and Storytime creates a unique story with AI narration and keyword-triggered SVG illustrations — all locally, with no server or API calls.

## How It Works

1. **Enter a prompt** describing who the story is about
2. **Story generation** — a local LLM writes a 3-5 paragraph bedtime story, streamed to the page in real time
3. **Voice synthesis** — each sentence is converted to speech locally using a neural TTS model
4. **Illustrated playback** — when you press play, SVG illustrations fade in and out in sync with the narration, matched by keywords in each sentence

## Technologies

| Component | Technology | Details |
|---|---|---|
| **Text Generation** | [WebLLM](https://github.com/mlc-ai/web-llm) | Qwen 2.5 1.5B (q4f16) running on WebGPU |
| **Text-to-Speech** | [Kokoro TTS](https://github.com/hexgrad/kokoro) | Kokoro-82M (q8) running on WebAssembly via ONNX Runtime |
| **Illustrations** | Hand-crafted SVGs | 22 keyword-triggered scenes with crossfade transitions |
| **Audio Sync** | Web Audio API + requestAnimationFrame | Per-sentence timing mapped to sample positions |
| **Runtime** | Browser-native | No backend, no API keys, no data leaves the device |

## Illustration System

The app includes 22 SVG illustrations covering common story themes: night sky, moon, stars, sun, forest, flowers, mountains, ocean, river, rain, snow, fox, rabbit, bear, owl, bird, castle, house, boat, dragon, fairy, and sleep. Each illustration is mapped to a set of trigger keywords. During audio playback, sentences are matched against these keywords and the corresponding illustration fades in using a two-layer crossfade (A/B buffer swap).

A "brush your teeth" reminder SVG is displayed during the audio synthesis wait.

## Voices

Kokoro provides multiple voice options including American and British accents in male and female variants. Voice selection is available before generation.

## Browser Requirements

- **Chrome or Edge** (WebGPU required for text generation)
- ~800MB model download on first use (cached by the browser)
- A GPU with WebGPU support

Safari and Firefox do not currently support WebGPU.

## Running Locally

```bash
python3 -m http.server 8000
```

Open http://localhost:8000 in Chrome or Edge.

## Project Structure

```
index.html          — App shell and UI
app.js              — Generation pipeline, audio playback, illustration sync
illustrations.js    — SVG library with keyword mappings
style.css           — Styling, animations, crossfade layers
```
