```markdown
# 🏒 PuckTales: Hockey History & Fan Culture Archive

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-3D%20Visualization-green.svg)](https://threejs.org/)
[![Leaflet](https://img.shields.io/badge/Leaflet-Maps-brightgreen.svg)](https://leafletjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC.svg)](https://tailwindcss.com/)

An interactive web application showcasing hockey history and fan culture through modern web technologies and nostalgic retro-inspired design. Explore the rich history of hockey with 3D visualizations, interactive maps, and engaging mini-games.

---

## 🎥 Demo Video

[![PuckTales Demo Video](https://img.shields.io/badge/YouTube-Demo%20Video-red.svg)](https://youtu.be/8Typ8DVUIqM?si=x9jJdU6LYp_jXnW5)

*Click above to watch a comprehensive demonstration of all features.*

---

## ✨ Features

### 🏆 3D Stanley Cup Visualization
- Interactive 3D model of the Stanley Cup built with Three.js
- Click through championship eras and teams
- Animated camera transitions and auto-rotation
- Detailed team information for each championship ring

### 🌍 Interactive World Map
- Visualize hockey leagues around the world using Leaflet
- Heatmaps showing fan density and team locations
- Custom GeoJSON league boundaries
- Toggle between different league types and layers

### 🎮 Hockey Puck Mini-Game
- Hidden Easter egg activated by **Konami Code**
- Physics-based puck collisions and movement
- Timer-based score challenge
- High score stored in `localStorage`

### 🎨 Retro-Inspired Design
- 80s/90s arcade aesthetic
- Pixelated borders, bold shadows, neon gradients
- Responsive design across devices

---

## 🛠️ Technology Stack

| Category         | Technology                     |
|------------------|--------------------------------|
| Frontend         | React 18                       |
| 3D Graphics      | Three.js + React Three Fiber   |
| Maps             | Leaflet w/ custom GeoJSON      |
| Styling          | Tailwind CSS                   |
| Animation        | GSAP                           |
| Language         | TypeScript                     |
| Routing          | React Router                   |

---

## 🚀 Quick Start

### ✅ Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/sprinklepancake/pucktales.git
cd pucktales
```

```bash
# Install frontend dependencies
cd client
npm install
```

```bash
# Start development server
npm start
```

➡️ Open your browser and navigate to:  
**http://localhost:3000**

### 🏗️ Build for production

```bash
npm run build
```

---

## 📁 Project Structure

```
pucktales/
├── client/                      # React frontend
│   ├── public/                  # Static assets
│   │   ├── sounds/              # Mini-game audio
│   │   └── textures/            # Images & textures
│   ├── src/
│   │   ├── components/          # Core components
│   │   │   ├── Map.js           # Interactive map
│   │   │   ├── PuckGame.js      # Mini-game logic
│   │   │   └── StanleyCup.js    # 3D Cup visualization
│   │   ├── styles/              # Tailwind styles
│   │   └── GeoJson/             # Map data
│   └── package.json
├── src/                         # Backend (if applicable)
│   ├── app.js                   # Express server
│   ├── routes/                  # API endpoints
│   └── models/                  # Data models
└── README.md
```

---

## 🎯 Key Components

### Stanley Cup Visualization
- `StanleyCup` → full 3D model & animation
- `ChampionshipBand` → clickable ring sections
- `YearScrubber` → timeline navigation
- `InfoPanel` → shows team details

### Interactive Map
- Toggle between layers (leagues, territories, heatmap)
- Team markers with details on click

### Mini-Game
- Triggered by Konami code: **↑↑↓↓←→←→BA**
- Collision physics
- Score + high score save
- Mobile touch support

---

## 🎨 Design Philosophy

PuckTales blends **modern web technology** with **retro nostalgia**:
- Accessibility: hockey history made approachable & fun
- Interactivity: designed for exploration
- Performance: smooth animations and state management
- Nostalgia: pixel UI + old-school arcade feeling

---

## 🔧 Development Challenges & Solutions

| Challenge | Solution |
|----------|----------|
| 3D cup model complexity | Broke model into geometric primitives with custom lathe geometries |
| Limited historical data | Structured custom objects with fallback data |
| Mobile issues | Touch-friendly controls + collapsible UI |
| Performance bottlenecks | Lazy loading & optimized state management |

---

## 🚀 Future Enhancements

- Live hockey data via API integration
- More leagues & global expansion
- User authentication and personalization
- Hockey stick timeline visualization
- Player cards with detailed stats
- More 3D animations + gamification

---

## 📄 License

This project is open source under the **MIT License**.

---

## 👤 Developer

**Hassan Najjar**

- GitHub: [@sprinklepancake](https://github.com/sprinklepancake)
- Project Demo: YouTube video (linked at top)

---

🤝 *Contributions, issues, and feature requests are welcome.*  
Feel free to open an issue or PR!

Built with passion for hockey history & modern web technology 🏒✨
```
