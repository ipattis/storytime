// SVG Illustration Library — keyword-triggered, whimsical bedtime style
// Colors: #e0aaff (light purple), #9d4edd (purple), #fbd38d (warm gold), #4ade80 (soft green), #7ec8e3 (soft blue)

export const illustrations = [
    {
        id: "night-sky",
        keywords: ["night", "dark", "evening", "dusk", "twilight"],
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="night-sky-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0b0f19"/>
                    <stop offset="100%" stop-color="#1a1a3e"/>
                </linearGradient>
            </defs>
            <rect width="400" height="250" fill="url(#night-sky-bg)"/>
            <circle cx="60" cy="40" r="2" fill="#e0aaff" opacity="0.8"/>
            <circle cx="140" cy="25" r="1.5" fill="#fbd38d" opacity="0.6"/>
            <circle cx="200" cy="55" r="2.5" fill="#e0aaff" opacity="0.7"/>
            <circle cx="280" cy="30" r="1.8" fill="#fbd38d" opacity="0.9"/>
            <circle cx="340" cy="60" r="2" fill="#e0aaff" opacity="0.5"/>
            <circle cx="100" cy="70" r="1.2" fill="#fbd38d" opacity="0.7"/>
            <circle cx="320" cy="90" r="1.5" fill="#e0aaff" opacity="0.6"/>
            <circle cx="50" cy="100" r="1" fill="#fbd38d" opacity="0.8"/>
            <circle cx="250" cy="45" r="2" fill="#e0aaff" opacity="0.9"/>
            <circle cx="180" cy="85" r="1.3" fill="#fbd38d" opacity="0.5"/>
            <ellipse cx="200" cy="220" rx="220" ry="50" fill="#1a1a3e" opacity="0.6"/>
            <path d="M0 210 Q100 180 200 200 Q300 220 400 195 L400 250 L0 250Z" fill="#141a2b"/>
        </svg>`
    },
    {
        id: "moon",
        keywords: ["moon", "moonlight", "lunar"],
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="moon-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0b0f19"/>
                    <stop offset="100%" stop-color="#1a1a3e"/>
                </linearGradient>
                <radialGradient id="moon-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#fbd38d" stop-opacity="0.3"/>
                    <stop offset="100%" stop-color="#fbd38d" stop-opacity="0"/>
                </radialGradient>
            </defs>
            <rect width="400" height="250" fill="url(#moon-bg)"/>
            <circle cx="200" cy="90" r="70" fill="url(#moon-glow)"/>
            <circle cx="200" cy="90" r="40" fill="#fbd38d"/>
            <circle cx="185" cy="80" r="10" fill="#f0c87a" opacity="0.5"/>
            <circle cx="210" cy="100" r="7" fill="#f0c87a" opacity="0.4"/>
            <circle cx="195" cy="70" r="5" fill="#f0c87a" opacity="0.3"/>
            <circle cx="100" cy="40" r="1.5" fill="#e0aaff" opacity="0.6"/>
            <circle cx="310" cy="55" r="2" fill="#e0aaff" opacity="0.7"/>
            <circle cx="60" cy="80" r="1" fill="#fbd38d" opacity="0.5"/>
            <circle cx="350" cy="35" r="1.8" fill="#e0aaff" opacity="0.8"/>
            <path d="M0 210 Q100 190 200 205 Q300 220 400 200 L400 250 L0 250Z" fill="#141a2b"/>
        </svg>`
    },
    {
        id: "stars",
        keywords: ["stars", "starlight", "sparkle", "twinkle"],
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="stars-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0b0f19"/>
                    <stop offset="100%" stop-color="#1a1a3e"/>
                </linearGradient>
            </defs>
            <rect width="400" height="250" fill="url(#stars-bg)"/>
            <polygon points="80,20 83,30 93,30 85,36 88,46 80,40 72,46 75,36 67,30 77,30" fill="#fbd38d" opacity="0.9"/>
            <polygon points="200,15 202,22 209,22 203,26 205,33 200,29 195,33 197,26 191,22 198,22" fill="#e0aaff" opacity="0.8"/>
            <polygon points="320,35 323,45 333,45 325,51 328,61 320,55 312,61 315,51 307,45 317,45" fill="#fbd38d" opacity="0.85"/>
            <polygon points="150,60 152,67 159,67 153,71 155,78 150,74 145,78 147,71 141,67 148,67" fill="#e0aaff" opacity="0.7"/>
            <polygon points="260,70 262,77 269,77 263,81 265,88 260,84 255,88 257,81 251,77 258,77" fill="#fbd38d" opacity="0.75"/>
            <polygon points="50,90 52,97 59,97 53,101 55,108 50,104 45,108 47,101 41,97 48,97" fill="#e0aaff" opacity="0.6"/>
            <polygon points="360,100 362,107 369,107 363,111 365,118 360,114 355,118 357,111 351,107 358,107" fill="#fbd38d" opacity="0.7"/>
            <circle cx="120" cy="110" r="1.5" fill="#e0aaff" opacity="0.5"/>
            <circle cx="290" cy="95" r="1" fill="#fbd38d" opacity="0.6"/>
            <path d="M0 200 Q100 185 200 195 Q300 210 400 190 L400 250 L0 250Z" fill="#141a2b"/>
        </svg>`
    },
    {
        id: "sun",
        keywords: ["sun", "sunrise", "dawn", "morning", "golden"],
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sun-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#7ec8e3"/>
                    <stop offset="60%" stop-color="#fbd38d"/>
                    <stop offset="100%" stop-color="#e0aaff"/>
                </linearGradient>
                <radialGradient id="sun-glow" cx="50%" cy="70%" r="40%">
                    <stop offset="0%" stop-color="#fbd38d" stop-opacity="0.6"/>
                    <stop offset="100%" stop-color="#fbd38d" stop-opacity="0"/>
                </radialGradient>
            </defs>
            <rect width="400" height="250" fill="url(#sun-bg)"/>
            <circle cx="200" cy="180" r="80" fill="url(#sun-glow)"/>
            <circle cx="200" cy="180" r="45" fill="#fbd38d"/>
            <line x1="200" y1="120" x2="200" y2="105" stroke="#fbd38d" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
            <line x1="240" y1="130" x2="252" y2="118" stroke="#fbd38d" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
            <line x1="160" y1="130" x2="148" y2="118" stroke="#fbd38d" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
            <path d="M0 200 Q100 190 200 195 Q300 200 400 190 L400 250 L0 250Z" fill="#4ade80" opacity="0.3"/>
            <path d="M0 210 Q100 200 200 210 Q300 220 400 205 L400 250 L0 250Z" fill="#4ade80" opacity="0.5"/>
        </svg>`
    },
    {
        id: "forest",
        keywords: ["forest", "woods", "trees", "woodland"],
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="forest-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0b0f19"/>
                    <stop offset="100%" stop-color="#1a2a1a"/>
                </linearGradient>
            </defs>
            <rect width="400" height="250" fill="url(#forest-bg)"/>
            <circle cx="320" cy="40" r="20" fill="#fbd38d" opacity="0.7"/>
            <polygon points="60,250 90,120 120,250" fill="#1a3a1a"/>
            <polygon points="75,250 90,140 105,250" fill="#4ade80" opacity="0.3"/>
            <polygon points="130,250 170,90 210,250" fill="#1a3a1a"/>
            <polygon points="150,250 170,110 190,250" fill="#4ade80" opacity="0.3"/>
            <polygon points="220,250 260,80 300,250" fill="#1a3a1a"/>
            <polygon points="240,250 260,100 280,250" fill="#4ade80" opacity="0.25"/>
            <polygon points="300,250 340,100 380,250" fill="#1a3a1a"/>
            <polygon points="315,250 340,120 365,250" fill="#4ade80" opacity="0.3"/>
            <polygon points="0,250 30,130 60,250" fill="#1a3a1a" opacity="0.8"/>
            <rect x="85" y="200" width="10" height="50" fill="#3d2b1f"/>
            <rect x="165" y="170" width="10" height="80" fill="#3d2b1f"/>
            <rect x="255" y="160" width="10" height="90" fill="#3d2b1f"/>
            <rect x="335" y="180" width="10" height="70" fill="#3d2b1f"/>
        </svg>`
    },
    {
        id: "flower",
        keywords: ["flower", "garden", "bloom", "petal", "rose"],
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="flower-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#1a1a3e"/>
                    <stop offset="100%" stop-color="#1a2a1a"/>
                </linearGradient>
            </defs>
            <rect width="400" height="250" fill="url(#flower-bg)"/>
            <path d="M0 200 Q100 185 200 195 Q300 205 400 190 L400 250 L0 250Z" fill="#1a3a1a"/>
            <line x1="120" y1="200" x2="120" y2="130" stroke="#4ade80" stroke-width="3"/>
            <circle cx="120" cy="120" r="15" fill="#e0aaff" opacity="0.7"/>
            <circle cx="120" cy="120" r="8" fill="#fbd38d"/>
            <ellipse cx="108" cy="112" rx="8" ry="12" fill="#e0aaff" opacity="0.5" transform="rotate(-30 108 112)"/>
            <ellipse cx="132" cy="112" rx="8" ry="12" fill="#e0aaff" opacity="0.5" transform="rotate(30 132 112)"/>
            <line x1="200" y1="195" x2="200" y2="110" stroke="#4ade80" stroke-width="3"/>
            <circle cx="200" cy="100" r="18" fill="#9d4edd" opacity="0.6"/>
            <circle cx="200" cy="100" r="9" fill="#fbd38d"/>
            <ellipse cx="186" cy="90" rx="9" ry="14" fill="#9d4edd" opacity="0.4" transform="rotate(-25 186 90)"/>
            <ellipse cx="214" cy="90" rx="9" ry="14" fill="#9d4edd" opacity="0.4" transform="rotate(25 214 90)"/>
            <line x1="300" y1="200" x2="300" y2="140" stroke="#4ade80" stroke-width="3"/>
            <circle cx="300" cy="130" r="13" fill="#e0aaff" opacity="0.6"/>
            <circle cx="300" cy="130" r="7" fill="#fbd38d"/>
            <circle cx="80" cy="50" r="1.5" fill="#e0aaff" opacity="0.5"/>
            <circle cx="340" cy="40" r="1" fill="#fbd38d" opacity="0.6"/>
        </svg>`
    },
    {
        id: "mountain",
        keywords: ["mountain", "hill", "peak", "valley"],
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="mountain-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0b0f19"/>
                    <stop offset="100%" stop-color="#1a1a3e"/>
                </linearGradient>
            </defs>
            <rect width="400" height="250" fill="url(#mountain-bg)"/>
            <circle cx="330" cy="45" r="18" fill="#fbd38d" opacity="0.7"/>
            <polygon points="50,250 150,80 250,250" fill="#2a2a5e"/>
            <polygon points="150,80 160,90 175,110 150,100" fill="#e0aaff" opacity="0.3"/>
            <polygon points="180,250 300,60 400,250" fill="#3a3a6e"/>
            <polygon points="300,60 310,72 325,90 300,80" fill="#e0aaff" opacity="0.25"/>
            <polygon points="0,250 80,130 180,250" fill="#1a1a4e" opacity="0.8"/>
            <polygon points="280,250 370,110 430,250" fill="#2a2a5e" opacity="0.7"/>
            <path d="M0 230 Q100 220 200 235 Q300 245 400 225 L400 250 L0 250Z" fill="#141a2b"/>
        </svg>`
    },
    {
        id: "ocean",
        keywords: ["ocean", "sea", "wave", "water", "shore", "beach"],
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ocean-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0b0f19"/>
                    <stop offset="50%" stop-color="#1a1a3e"/>
                    <stop offset="100%" stop-color="#0a2a4a"/>
                </linearGradient>
            </defs>
            <rect width="400" height="250" fill="url(#ocean-bg)"/>
            <circle cx="320" cy="40" r="20" fill="#fbd38d" opacity="0.6"/>
            <path d="M0 140 Q50 125 100 140 Q150 155 200 140 Q250 125 300 140 Q350 155 400 140 L400 250 L0 250Z" fill="#7ec8e3" opacity="0.15"/>
            <path d="M0 160 Q50 145 100 160 Q150 175 200 160 Q250 145 300 160 Q350 175 400 160 L400 250 L0 250Z" fill="#7ec8e3" opacity="0.2"/>
            <path d="M0 180 Q50 165 100 180 Q150 195 200 180 Q250 165 300 180 Q350 195 400 180 L400 250 L0 250Z" fill="#7ec8e3" opacity="0.25"/>
            <path d="M0 200 Q50 185 100 200 Q150 215 200 200 Q250 185 300 200 Q350 215 400 200 L400 250 L0 250Z" fill="#7ec8e3" opacity="0.35"/>
            <path d="M0 220 Q50 210 100 220 Q150 230 200 220 Q250 210 300 220 Q350 230 400 220 L400 250 L0 250Z" fill="#7ec8e3" opacity="0.45"/>
        </svg>`
    },
    {
        id: "river",
        keywords: ["river", "stream", "creek", "brook"],
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="river-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0b0f19"/>
                    <stop offset="100%" stop-color="#1a2a1a"/>
                </linearGradient>
            </defs>
            <rect width="400" height="250" fill="url(#river-bg)"/>
            <circle cx="50" cy="35" r="15" fill="#fbd38d" opacity="0.5"/>
            <path d="M0 180 Q60 170 100 185 Q160 200 200 175 Q260 150 300 170 Q360 190 400 165 L400 190 Q360 215 300 195 Q260 175 200 200 Q160 225 100 210 Q60 195 0 205Z" fill="#7ec8e3" opacity="0.35"/>
            <path d="M0 190 Q60 180 100 195 Q160 210 200 185 Q260 160 300 180 Q360 200 400 175 L400 195 Q360 220 300 200 Q260 180 200 205 Q160 230 100 215 Q60 200 0 210Z" fill="#7ec8e3" opacity="0.25"/>
            <polygon points="20,250 40,170 60,250" fill="#1a3a1a" opacity="0.6"/>
            <polygon points="340,250 360,160 380,250" fill="#1a3a1a" opacity="0.6"/>
            <path d="M0 230 Q100 220 200 235 Q300 245 400 225 L400 250 L0 250Z" fill="#1a3a1a" opacity="0.5"/>
        </svg>`
    },
    {
        id: "rain",
        keywords: ["rain", "storm", "thunder", "cloud"],
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="rain-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#1a1a3e"/>
                    <stop offset="100%" stop-color="#0b0f19"/>
                </linearGradient>
            </defs>
            <rect width="400" height="250" fill="url(#rain-bg)"/>
            <ellipse cx="150" cy="60" rx="70" ry="30" fill="#3a3a5e"/>
            <ellipse cx="120" cy="55" rx="40" ry="25" fill="#4a4a6e"/>
            <ellipse cx="180" cy="50" rx="45" ry="28" fill="#4a4a6e"/>
            <ellipse cx="300" cy="80" rx="55" ry="25" fill="#3a3a5e"/>
            <ellipse cx="280" cy="75" rx="35" ry="22" fill="#4a4a6e"/>
            <line x1="110" y1="95" x2="105" y2="130" stroke="#7ec8e3" stroke-width="1.5" opacity="0.4"/>
            <line x1="135" y1="90" x2="130" y2="135" stroke="#7ec8e3" stroke-width="1.5" opacity="0.35"/>
            <line x1="160" y1="92" x2="155" y2="140" stroke="#7ec8e3" stroke-width="1.5" opacity="0.45"/>
            <line x1="185" y1="88" x2="180" y2="130" stroke="#7ec8e3" stroke-width="1.5" opacity="0.3"/>
            <line x1="275" y1="105" x2="270" y2="145" stroke="#7ec8e3" stroke-width="1.5" opacity="0.35"/>
            <line x1="300" y1="102" x2="295" y2="150" stroke="#7ec8e3" stroke-width="1.5" opacity="0.4"/>
            <line x1="325" y1="100" x2="320" y2="140" stroke="#7ec8e3" stroke-width="1.5" opacity="0.3"/>
            <line x1="120" y1="140" x2="115" y2="180" stroke="#7ec8e3" stroke-width="1" opacity="0.25"/>
            <line x1="150" y1="145" x2="145" y2="190" stroke="#7ec8e3" stroke-width="1" opacity="0.2"/>
            <line x1="290" y1="150" x2="285" y2="195" stroke="#7ec8e3" stroke-width="1" opacity="0.25"/>
            <path d="M0 220 Q100 210 200 220 Q300 230 400 215 L400 250 L0 250Z" fill="#141a2b"/>
        </svg>`
    },
    {
        id: "snow",
        keywords: ["snow", "winter", "frost", "ice", "cold"],
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="snow-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#1a1a3e"/>
                    <stop offset="100%" stop-color="#2a3a5e"/>
                </linearGradient>
            </defs>
            <rect width="400" height="250" fill="url(#snow-bg)"/>
            <circle cx="50" cy="60" r="4" fill="white" opacity="0.6"/>
            <circle cx="120" cy="40" r="3" fill="white" opacity="0.5"/>
            <circle cx="200" cy="55" r="5" fill="white" opacity="0.7"/>
            <circle cx="280" cy="35" r="3.5" fill="white" opacity="0.55"/>
            <circle cx="350" cy="65" r="4" fill="white" opacity="0.6"/>
            <circle cx="80" cy="100" r="3" fill="white" opacity="0.45"/>
            <circle cx="160" cy="90" r="4.5" fill="white" opacity="0.5"/>
            <circle cx="240" cy="80" r="3" fill="white" opacity="0.6"/>
            <circle cx="320" cy="105" r="3.5" fill="white" opacity="0.45"/>
            <circle cx="30" cy="140" r="2.5" fill="white" opacity="0.4"/>
            <circle cx="180" cy="130" r="3" fill="white" opacity="0.5"/>
            <circle cx="300" cy="145" r="4" fill="white" opacity="0.45"/>
            <circle cx="370" cy="125" r="2.5" fill="white" opacity="0.5"/>
            <path d="M0 190 Q100 175 200 190 Q300 205 400 185 L400 250 L0 250Z" fill="white" opacity="0.15"/>
            <path d="M0 210 Q100 200 200 215 Q300 225 400 205 L400 250 L0 250Z" fill="white" opacity="0.25"/>
        </svg>`
    },
    {
        id: "fox",
        keywords: ["fox"],
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="fox-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0b0f19"/>
                    <stop offset="100%" stop-color="#1a2a1a"/>
                </linearGradient>
            </defs>
            <rect width="400" height="250" fill="url(#fox-bg)"/>
            <circle cx="330" cy="40" r="18" fill="#fbd38d" opacity="0.6"/>
            <path d="M0 210 Q100 195 200 210 Q300 225 400 205 L400 250 L0 250Z" fill="#1a3a1a"/>
            <ellipse cx="200" cy="185" rx="40" ry="25" fill="#e07a3a"/>
            <polygon points="175,170 165,130 185,155" fill="#e07a3a"/>
            <polygon points="225,170 235,130 215,155" fill="#e07a3a"/>
            <polygon points="175,170 165,135 180,155" fill="#fbd38d" opacity="0.5"/>
            <polygon points="225,170 235,135 220,155" fill="#fbd38d" opacity="0.5"/>
            <ellipse cx="200" cy="175" rx="30" ry="18" fill="#e07a3a"/>
            <circle cx="190" cy="170" r="3" fill="#0b0f19"/>
            <circle cx="210" cy="170" r="3" fill="#0b0f19"/>
            <ellipse cx="200" cy="180" rx="5" ry="3" fill="#0b0f19"/>
            <ellipse cx="200" cy="195" rx="12" ry="6" fill="#fbd38d" opacity="0.6"/>
            <path d="M240 185 Q270 175 280 190" stroke="#e07a3a" stroke-width="6" fill="none" stroke-linecap="round"/>
            <path d="M278 188 Q282 192 280 196" fill="#fbd38d" opacity="0.8"/>
        </svg>`
    },
    {
        id: "rabbit",
        keywords: ["rabbit", "bunny", "hare"],
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="rabbit-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0b0f19"/>
                    <stop offset="100%" stop-color="#1a1a3e"/>
                </linearGradient>
            </defs>
            <rect width="400" height="250" fill="url(#rabbit-bg)"/>
            <circle cx="80" cy="35" r="15" fill="#fbd38d" opacity="0.5"/>
            <path d="M0 210 Q100 195 200 210 Q300 225 400 205 L400 250 L0 250Z" fill="#1a3a1a"/>
            <ellipse cx="200" cy="190" rx="30" ry="22" fill="#e0aaff" opacity="0.7"/>
            <ellipse cx="200" cy="175" rx="22" ry="18" fill="#e0aaff" opacity="0.8"/>
            <ellipse cx="188" cy="140" rx="7" ry="25" fill="#e0aaff" opacity="0.7"/>
            <ellipse cx="212" cy="140" rx="7" ry="25" fill="#e0aaff" opacity="0.7"/>
            <ellipse cx="188" cy="138" rx="4" ry="18" fill="#fbd38d" opacity="0.3"/>
            <ellipse cx="212" cy="138" rx="4" ry="18" fill="#fbd38d" opacity="0.3"/>
            <circle cx="192" cy="170" r="2.5" fill="#0b0f19"/>
            <circle cx="208" cy="170" r="2.5" fill="#0b0f19"/>
            <ellipse cx="200" cy="178" rx="3" ry="2" fill="#fbd38d" opacity="0.6"/>
            <circle cx="160" cy="60" r="1.5" fill="#e0aaff" opacity="0.5"/>
            <circle cx="300" cy="45" r="2" fill="#fbd38d" opacity="0.6"/>
            <circle cx="350" cy="80" r="1" fill="#e0aaff" opacity="0.4"/>
        </svg>`
    },
    {
        id: "bear",
        keywords: ["bear", "cub"],
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bear-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0b0f19"/>
                    <stop offset="100%" stop-color="#1a2a1a"/>
                </linearGradient>
            </defs>
            <rect width="400" height="250" fill="url(#bear-bg)"/>
            <circle cx="330" cy="40" r="18" fill="#fbd38d" opacity="0.5"/>
            <path d="M0 210 Q100 195 200 210 Q300 225 400 205 L400 250 L0 250Z" fill="#1a3a1a"/>
            <ellipse cx="200" cy="185" rx="45" ry="30" fill="#5a3a2a"/>
            <ellipse cx="200" cy="165" rx="30" ry="25" fill="#5a3a2a"/>
            <circle cx="178" cy="148" r="12" fill="#5a3a2a"/>
            <circle cx="222" cy="148" r="12" fill="#5a3a2a"/>
            <circle cx="178" cy="148" r="6" fill="#7a5a4a"/>
            <circle cx="222" cy="148" r="6" fill="#7a5a4a"/>
            <circle cx="192" cy="160" r="3" fill="#0b0f19"/>
            <circle cx="208" cy="160" r="3" fill="#0b0f19"/>
            <ellipse cx="200" cy="172" rx="8" ry="5" fill="#7a5a4a"/>
            <ellipse cx="200" cy="170" rx="3" ry="2" fill="#0b0f19"/>
        </svg>`
    },
    {
        id: "owl",
        keywords: ["owl", "hoot"],
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="owl-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0b0f19"/>
                    <stop offset="100%" stop-color="#1a1a3e"/>
                </linearGradient>
            </defs>
            <rect width="400" height="250" fill="url(#owl-bg)"/>
            <circle cx="100" cy="35" r="20" fill="#fbd38d" opacity="0.6"/>
            <rect x="185" y="190" width="30" height="60" fill="#3d2b1f"/>
            <polygon points="140,190 200,80 260,190" fill="#1a3a1a"/>
            <ellipse cx="200" cy="155" rx="28" ry="32" fill="#5a3a2a"/>
            <ellipse cx="200" cy="160" rx="20" ry="22" fill="#7a5a4a" opacity="0.5"/>
            <circle cx="190" cy="148" r="10" fill="#fbd38d" opacity="0.8"/>
            <circle cx="210" cy="148" r="10" fill="#fbd38d" opacity="0.8"/>
            <circle cx="190" cy="148" r="5" fill="#0b0f19"/>
            <circle cx="210" cy="148" r="5" fill="#0b0f19"/>
            <polygon points="200,155 196,162 204,162" fill="#e07a3a"/>
            <polygon points="175,145 170,135 182,148" fill="#5a3a2a"/>
            <polygon points="225,145 230,135 218,148" fill="#5a3a2a"/>
            <circle cx="300" cy="60" r="1.5" fill="#e0aaff" opacity="0.5"/>
            <circle cx="350" cy="40" r="1" fill="#fbd38d" opacity="0.6"/>
        </svg>`
    },
    {
        id: "bird",
        keywords: ["bird", "robin", "sparrow", "wings", "flew", "flying"],
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bird-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#7ec8e3" stop-opacity="0.3"/>
                    <stop offset="100%" stop-color="#0b0f19"/>
                </linearGradient>
            </defs>
            <rect width="400" height="250" fill="url(#bird-bg)"/>
            <circle cx="320" cy="50" r="25" fill="#fbd38d" opacity="0.5"/>
            <path d="M160 100 Q140 80 120 90 Q140 85 155 95" fill="#9d4edd" opacity="0.7"/>
            <ellipse cx="170" cy="100" rx="18" ry="12" fill="#9d4edd" opacity="0.8"/>
            <path d="M185 95 Q195 90 190 98" fill="#e07a3a"/>
            <circle cx="178" cy="96" r="2" fill="#0b0f19"/>
            <path d="M155 105 Q145 115 155 112 Q150 118 160 110" fill="#e0aaff" opacity="0.5"/>
            <path d="M250 130 Q230 110 210 120 Q230 115 245 125" fill="#7ec8e3" opacity="0.5"/>
            <ellipse cx="260" cy="130" rx="14" ry="9" fill="#7ec8e3" opacity="0.6"/>
            <path d="M100 160 Q80 140 65 150 Q80 145 95 155" fill="#e0aaff" opacity="0.4"/>
            <ellipse cx="110" cy="160" rx="12" ry="8" fill="#e0aaff" opacity="0.5"/>
            <path d="M0 210 Q100 195 200 210 Q300 225 400 205 L400 250 L0 250Z" fill="#1a3a1a"/>
        </svg>`
    },
    {
        id: "castle",
        keywords: ["castle", "tower", "kingdom", "palace", "prince", "princess"],
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="castle-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0b0f19"/>
                    <stop offset="100%" stop-color="#1a1a3e"/>
                </linearGradient>
            </defs>
            <rect width="400" height="250" fill="url(#castle-bg)"/>
            <circle cx="320" cy="40" r="22" fill="#fbd38d" opacity="0.6"/>
            <circle cx="100" cy="30" r="1.5" fill="#e0aaff" opacity="0.6"/>
            <circle cx="60" cy="55" r="1" fill="#fbd38d" opacity="0.5"/>
            <rect x="155" y="120" width="90" height="130" fill="#2a2a5e"/>
            <rect x="140" y="90" width="25" height="160" fill="#3a3a6e"/>
            <rect x="235" y="90" width="25" height="160" fill="#3a3a6e"/>
            <rect x="137" y="80" width="8" height="15" fill="#3a3a6e"/>
            <rect x="155" y="80" width="8" height="15" fill="#3a3a6e"/>
            <rect x="232" y="80" width="8" height="15" fill="#3a3a6e"/>
            <rect x="250" y="80" width="8" height="15" fill="#3a3a6e"/>
            <rect x="170" y="100" width="8" height="15" fill="#2a2a5e"/>
            <rect x="188" y="100" width="8" height="15" fill="#2a2a5e"/>
            <rect x="206" y="100" width="8" height="15" fill="#2a2a5e"/>
            <rect x="224" y="100" width="8" height="15" fill="#2a2a5e"/>
            <rect x="185" y="180" width="30" height="70" fill="#1a1a3e"/>
            <path d="M185 180 Q200 170 215 180" fill="#2a2a5e"/>
            <rect x="195" y="140" width="10" height="12" fill="#fbd38d" opacity="0.5"/>
            <rect x="155" y="145" width="8" height="10" fill="#fbd38d" opacity="0.3"/>
            <rect x="237" y="145" width="8" height="10" fill="#fbd38d" opacity="0.3"/>
            <polygon points="152,90 153,70 164,90" fill="#9d4edd" opacity="0.4"/>
            <polygon points="247,90 248,70 259,90" fill="#9d4edd" opacity="0.4"/>
        </svg>`
    },
    {
        id: "house",
        keywords: ["house", "home", "cottage", "cabin"],
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="house-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0b0f19"/>
                    <stop offset="100%" stop-color="#1a1a3e"/>
                </linearGradient>
            </defs>
            <rect width="400" height="250" fill="url(#house-bg)"/>
            <circle cx="80" cy="40" r="18" fill="#fbd38d" opacity="0.5"/>
            <circle cx="300" cy="30" r="1.5" fill="#e0aaff" opacity="0.6"/>
            <circle cx="350" cy="55" r="1" fill="#fbd38d" opacity="0.5"/>
            <path d="M0 200 Q100 185 200 200 Q300 215 400 195 L400 250 L0 250Z" fill="#1a3a1a"/>
            <rect x="155" y="145" width="90" height="55" fill="#3d2b1f"/>
            <polygon points="145,145 200,90 255,145" fill="#5a3a2a"/>
            <rect x="185" y="165" width="25" height="35" fill="#2a1a0f"/>
            <circle cx="205" cy="183" r="2" fill="#fbd38d" opacity="0.6"/>
            <rect x="160" y="155" width="15" height="15" fill="#fbd38d" opacity="0.4"/>
            <rect x="225" y="155" width="15" height="15" fill="#fbd38d" opacity="0.4"/>
            <rect x="218" y="110" width="8" height="30" fill="#5a3a2a"/>
            <path d="M220 108 Q226 95 230 108" fill="#9d4edd" opacity="0.3"/>
        </svg>`
    },
    {
        id: "boat",
        keywords: ["boat", "ship", "sail", "voyage"],
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="boat-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0b0f19"/>
                    <stop offset="50%" stop-color="#1a1a3e"/>
                    <stop offset="100%" stop-color="#0a2a4a"/>
                </linearGradient>
            </defs>
            <rect width="400" height="250" fill="url(#boat-bg)"/>
            <circle cx="320" cy="40" r="18" fill="#fbd38d" opacity="0.6"/>
            <circle cx="80" cy="30" r="1.5" fill="#e0aaff" opacity="0.6"/>
            <circle cx="150" cy="45" r="1" fill="#fbd38d" opacity="0.5"/>
            <path d="M160 160 L200 160 L195 100 Z" fill="white" opacity="0.7"/>
            <line x1="195" y1="100" x2="195" y2="180" stroke="#3d2b1f" stroke-width="2"/>
            <path d="M150 175 Q170 165 195 170 Q220 165 250 175 L240 190 L160 190 Z" fill="#5a3a2a"/>
            <path d="M0 185 Q50 175 100 185 Q150 195 200 185 Q250 175 300 185 Q350 195 400 185 L400 250 L0 250Z" fill="#7ec8e3" opacity="0.2"/>
            <path d="M0 200 Q50 190 100 200 Q150 210 200 200 Q250 190 300 200 Q350 210 400 200 L400 250 L0 250Z" fill="#7ec8e3" opacity="0.3"/>
            <path d="M0 220 Q50 210 100 220 Q150 230 200 220 Q250 210 300 220 Q350 230 400 220 L400 250 L0 250Z" fill="#7ec8e3" opacity="0.4"/>
        </svg>`
    },
    {
        id: "dragon",
        keywords: ["dragon", "fire", "flame"],
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="dragon-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0b0f19"/>
                    <stop offset="100%" stop-color="#2a1a0a"/>
                </linearGradient>
            </defs>
            <rect width="400" height="250" fill="url(#dragon-bg)"/>
            <circle cx="330" cy="40" r="18" fill="#fbd38d" opacity="0.4"/>
            <path d="M0 210 Q100 195 200 210 Q300 225 400 205 L400 250 L0 250Z" fill="#1a1a2b"/>
            <ellipse cx="200" cy="170" rx="55" ry="30" fill="#9d4edd" opacity="0.7"/>
            <ellipse cx="180" cy="145" rx="20" ry="18" fill="#9d4edd" opacity="0.8"/>
            <polygon points="170,130 160,105 175,125" fill="#9d4edd" opacity="0.8"/>
            <polygon points="190,128 195,100 198,125" fill="#9d4edd" opacity="0.8"/>
            <circle cx="175" cy="140" r="3" fill="#fbd38d"/>
            <circle cx="175" cy="140" r="1.5" fill="#0b0f19"/>
            <circle cx="185" cy="140" r="3" fill="#fbd38d"/>
            <circle cx="185" cy="140" r="1.5" fill="#0b0f19"/>
            <path d="M168 150 Q155 148 145 155 Q140 158 142 162" fill="none" stroke="#fbd38d" stroke-width="2" opacity="0.6"/>
            <path d="M140 158 Q135 155 130 160" fill="#fbd38d" opacity="0.6"/>
            <path d="M140 162 Q133 160 128 165" fill="#e07a3a" opacity="0.5"/>
            <path d="M255 170 Q280 165 300 175 Q310 178 305 172 Q315 180 310 175" fill="#9d4edd" opacity="0.5"/>
            <path d="M165 155 Q155 165 170 175" fill="#9d4edd" opacity="0.6"/>
            <path d="M195 155 Q205 165 190 175" fill="#9d4edd" opacity="0.6"/>
            <polygon points="230,155 245,140 250,160" fill="#e0aaff" opacity="0.3"/>
            <polygon points="225,160 240,148 243,165" fill="#e0aaff" opacity="0.3"/>
        </svg>`
    },
    {
        id: "fairy",
        keywords: ["fairy", "magic", "wand", "pixie", "sprite"],
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="fairy-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0b0f19"/>
                    <stop offset="100%" stop-color="#1a1a3e"/>
                </linearGradient>
                <radialGradient id="fairy-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#e0aaff" stop-opacity="0.4"/>
                    <stop offset="100%" stop-color="#e0aaff" stop-opacity="0"/>
                </radialGradient>
            </defs>
            <rect width="400" height="250" fill="url(#fairy-bg)"/>
            <circle cx="200" cy="140" r="60" fill="url(#fairy-glow)"/>
            <circle cx="200" cy="135" r="10" fill="#fbd38d" opacity="0.8"/>
            <ellipse cx="200" cy="160" rx="8" ry="15" fill="#e0aaff" opacity="0.6"/>
            <path d="M178 145 Q175 130 185 140" fill="#e0aaff" opacity="0.4"/>
            <path d="M222 145 Q225 130 215 140" fill="#e0aaff" opacity="0.4"/>
            <path d="M190 145 Q180 150 175 145" fill="none" stroke="#e0aaff" stroke-width="1.5" opacity="0.5"/>
            <path d="M210 145 Q220 150 225 145" fill="none" stroke="#e0aaff" stroke-width="1.5" opacity="0.5"/>
            <line x1="215" y1="150" x2="240" y2="130" stroke="#fbd38d" stroke-width="1.5" opacity="0.7"/>
            <polygon points="240,128 243,125 245,132 238,130" fill="#fbd38d" opacity="0.9"/>
            <circle cx="150" cy="100" r="2" fill="#e0aaff" opacity="0.5"/>
            <circle cx="250" cy="110" r="1.5" fill="#fbd38d" opacity="0.6"/>
            <circle cx="170" cy="170" r="1" fill="#e0aaff" opacity="0.4"/>
            <circle cx="230" cy="165" r="1.5" fill="#fbd38d" opacity="0.5"/>
            <circle cx="190" cy="190" r="1" fill="#e0aaff" opacity="0.3"/>
            <circle cx="215" cy="185" r="1.2" fill="#fbd38d" opacity="0.4"/>
            <circle cx="160" cy="80" r="1" fill="#e0aaff" opacity="0.5"/>
            <circle cx="300" cy="60" r="1.5" fill="#fbd38d" opacity="0.4"/>
            <path d="M0 220 Q100 210 200 220 Q300 230 400 215 L400 250 L0 250Z" fill="#141a2b"/>
        </svg>`
    },
    {
        id: "sleep",
        keywords: ["sleep", "dream", "bed", "pillow", "blanket", "yawn", "tired", "rest"],
        svg: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sleep-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0b0f19"/>
                    <stop offset="100%" stop-color="#1a1a3e"/>
                </linearGradient>
            </defs>
            <rect width="400" height="250" fill="url(#sleep-bg)"/>
            <circle cx="100" cy="35" r="18" fill="#fbd38d" opacity="0.4"/>
            <circle cx="250" cy="30" r="1.5" fill="#e0aaff" opacity="0.6"/>
            <circle cx="310" cy="50" r="1" fill="#fbd38d" opacity="0.5"/>
            <circle cx="350" cy="35" r="2" fill="#e0aaff" opacity="0.4"/>
            <rect x="120" y="160" width="160" height="50" rx="8" fill="#9d4edd" opacity="0.3"/>
            <rect x="115" y="155" width="170" height="15" rx="5" fill="#9d4edd" opacity="0.2"/>
            <ellipse cx="155" cy="158" rx="25" ry="12" fill="#e0aaff" opacity="0.3"/>
            <path d="M120 170 Q200 150 280 170 L280 210 Q200 195 120 210Z" fill="#9d4edd" opacity="0.25"/>
            <text x="260" y="130" font-family="serif" font-size="24" fill="#e0aaff" opacity="0.6">z</text>
            <text x="280" y="110" font-family="serif" font-size="20" fill="#e0aaff" opacity="0.45">z</text>
            <text x="295" y="90" font-family="serif" font-size="16" fill="#e0aaff" opacity="0.3">z</text>
            <path d="M0 220 Q100 210 200 220 Q300 230 400 215 L400 250 L0 250Z" fill="#141a2b"/>
        </svg>`
    }
];

export const defaultIllustration = "night-sky";
