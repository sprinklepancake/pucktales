```markdown
<div align="center">

# 🏒 PuckTales  
### *Hockey History & Fan Culture Archive*

<br/>

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-3D%20Visualization-green.svg)](https://threejs.org/)
[![Leaflet](https://img.shields.io/badge/Leaflet-Maps-brightgreen.svg)](https://leafletjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC.svg)](https://tailwindcss.com/)

**Explore hockey history through 3D visuals, an interactive world map, and a retro arcade mini-game.**

</div>

---

## 🎥 Demo Video

👉 Click to watch the full project demo:  
[![PuckTales Demo Video](https://img.shields.io/badge/YouTube-Demo%20Video-red.svg)](https://youtu.be/8Typ8DVUIqM?si=x9jJdU6LYp_jXnW5)

---

## ✨ Features

### 🏆 3D Stanley Cup Visualization
- Fully interactive 3D model using Three.js
- Explore championship rings by era
- Smooth animation and camera transitions

### 🌍 Interactive World Map
- Global league visualization (Leaflet + custom GeoJSON)
- Fan heatmaps and team location markers
- Toggle between different data layers

### 🎮 Hockey Mini-Game (Konami Secret)
- Hidden Easter egg activated by **↑↑↓↓←→←→BA**
- Physics-based puck movement & scoring
- Saves high score using localStorage

### 🎨 Retro Aesthetic
- 80s/90s pixel gaming style
- Neon gradients, chunky borders, responsive UI

---

## 🛠️ Tech Stack

| Category       | Tech Used                          |
|----------------|------------------------------------|
| Frontend       | React 18                           |
| 3D Graphics    | Three.js + React Three Fiber       |
| Maps           | Leaflet + custom GeoJSON           |
| Styling        | Tailwind CSS                       |
| Animations     | GSAP                               |
| Language       | TypeScript                         |
| Routing        | React Router                       |

---

## 🚀 Quick Start

### ✅ Requirements
- Node.js (v14+)
- npm or yarn

### Installation

```bash
git clone https://github.com/sprinklepancake/pucktales.git
cd pucktales

cd client
npm install
npm start
```

Then visit:  
➡️ **http://localhost:3000**

### Build for production

```bash
npm run build
```

---

## 📦 Project Structure

```
pucktales/
├── client/
│   ├── public/            # Static assets (sounds, textures)
│   ├── src/
│   │   ├── components/    # Map, Mini-game, Stanley Cup 3D
│   │   ├── styles/        
│   │   └── GeoJson/       # Hockey league map data
├── src/ (optional backend)
└── README.md
```

---

## 🎯 Future Enhancements

- Live API hockey data
- Hockey stick-shaped timeline UI
- Player profiles w/ visual stats
- User accounts + saved collections

---

## 👤 Developer

**Hassan Najjar**

🔗 GitHub: https://github.com/sprinklepancake  
🎥 Demo: YouTube (linked above)

---

> Built with passion for hockey history and modern web technology 🏒✨
```
