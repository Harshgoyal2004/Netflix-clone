# 🎬 Netflix Clone - Premium React Frontend

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-FF0055?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

<p align="center">
  A <strong>Netflix-grade React frontend</strong> featuring glassmorphism design, cinematic motion animations, and a premium visual experience. Built as a 2025 Netflix redesign concept showcasing modern web development practices.
</p>

<p align="center">
  <a href="https://github.com/Harshgoyal2004/Netflix-clone">View Repository</a> •
  <a href="#-features">Features</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-tech-stack">Tech Stack</a>
</p>

---

## 🖼️ Preview

### Home Page with Hero Section
The hero section features a full-screen video background with multi-layer gradient overlays, a floating glass content panel, and cinematic entrance animations.

### Movie Cards with Hover Effects
Cards feature smooth lift animations, glass info strips, and staggered action buttons on hover.

### Glass Modal
Fullscreen modal with backdrop blur, spring-based animations, and video preview.

---

## ✨ Features

### 🎨 Design Philosophy
- **Dark, cinematic UI** - Premium feel with deep shadows and rich gradients
- **Glassmorphism** - Selective use of blur effects for depth and elegance
- **Motion-first design** - Every interaction is animated for a fluid experience
- **High contrast typography** - Readable and visually striking
- **Zero default Tailwind look** - Fully customized design system

### 🏠 Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section with video background, featured content, and browsable movie rows |
| **TV Shows** | Filtered grid and rows of TV series content |
| **Movies** | Movie-focused browsing with genre categories |
| **My List** | Personal watchlist with add/remove functionality |
| **Search** | Real-time search with animated results grid |

### 🧩 Core Components

| Component | Features |
|-----------|----------|
| **Navbar** | Glass effect, scroll detection, animated links, profile dropdown |
| **Hero** | Autoplay video, parallax scroll, multi-layer gradients, glass panel |
| **MovieCard** | Hover lift animation, glass info strip, staggered action buttons |
| **MovieRow** | Horizontal scroll, custom navigation buttons, smooth animations |
| **MovieModal** | Fullscreen glass modal, spring animations, video preview |
| **SearchBar** | Expandable input, real-time results, keyboard navigation |
| **GlassContainer** | Reusable glassmorphism wrapper with configurable options |

### 🎭 Animation System
- **Centralized motion variants** - All animations defined in one place
- **Stagger containers** - Sequential reveal animations for lists
- **Spring physics** - Natural, organic motion for modals
- **Parallax scrolling** - Depth effect on hero section
- **Hover states** - Scale, lift, and shadow transitions

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.x | UI framework with hooks |
| **Vite** | 7.x | Lightning-fast build tool |
| **Tailwind CSS** | 4.x | Utility-first styling with custom theme |
| **Framer Motion** | 11.x | Production-ready animations |
| **React Router** | 7.x | Client-side routing |
| **Context API** | - | Global state management |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ 
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/Harshgoyal2004/Netflix-clone.git

# Navigate to project directory
cd Netflix-clone

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
netflix-clone/
├── 📂 public/
│   └── videos/                  # Background/preview videos
├── 📂 src/
│   ├── 📂 components/           # Reusable UI components
│   │   ├── GlassContainer.jsx   # Glassmorphism wrapper
│   │   ├── Navbar.jsx           # Navigation with glass effect
│   │   ├── Hero.jsx             # Full-screen hero section
│   │   ├── MovieCard.jsx        # Content card with hover effects
│   │   ├── MovieRow.jsx         # Horizontal scrollable row
│   │   ├── MovieModal.jsx       # Detail modal overlay
│   │   └── SearchBar.jsx        # Animated search input
│   ├── 📂 pages/                # Route pages
│   │   ├── Home.jsx
│   │   ├── TVShows.jsx
│   │   ├── Movies.jsx
│   │   ├── MyList.jsx
│   │   └── Search.jsx
│   ├── 📂 context/              # State management
│   │   └── AppContext.jsx       # Global app state
│   ├── 📂 motion/               # Animation system
│   │   └── variants.js          # Framer Motion variants
│   ├── 📂 data/                 # Mock data
│   │   └── mockData.js          # Sample content
│   ├── App.jsx                  # Root component with routing
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles & Tailwind
├── tailwind.config.js           # Custom Tailwind theme
├── postcss.config.js            # PostCSS configuration
├── vite.config.js               # Vite configuration
├── package.json
└── README.md
```

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `surface-dark` | `#0a0a0f` | Main background |
| `surface-mid` | `#141418` | Card backgrounds |
| `surface-light` | `#1a1a20` | Elevated surfaces |
| `accent-red` | `#e50914` | Primary CTA, Netflix red |
| `glass-dark` | `rgba(10,10,15,0.7)` | Glass backgrounds |
| `glass-border` | `rgba(255,255,255,0.08)` | Glass borders |
| `text-primary` | `#ffffff` | Primary text |
| `text-muted` | `#8c8c8c` | Secondary text |

### Glassmorphism Implementation

```css
.glass-panel {
  background: linear-gradient(135deg, rgba(20,20,30,0.8), rgba(10,10,15,0.6));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05);
}
```

**✅ Allowed Glass Zones:**
- Navbar
- Search bar
- Profile dropdown
- Hover info panels
- Modals

**❌ Prohibited:**
- White glass
- Excessive blur everywhere
- Glass on every element

### Typography

| Font | Usage |
|------|-------|
| **Bebas Neue** | Display headings, hero titles |
| **Inter** | Body text, UI elements |

---

## 🎬 Animation Examples

### Card Hover Animation
```javascript
export const cardHover = {
  rest: { scale: 1, y: 0, zIndex: 1 },
  hover: { 
    scale: 1.08, 
    y: -10, 
    zIndex: 10,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};
```

### Modal Spring Animation
```javascript
export const modalContent = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: 'spring', damping: 25, stiffness: 300 }
  }
};
```

### Stagger Container
```javascript
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};
```

---

## 🔧 State Management

Using React Context API for global state:

```javascript
const {
  // User
  user,
  
  // My List
  myList, addToList, removeFromList, isInList,
  
  // Search
  searchQuery, searchActive, setSearchQuery, clearSearch,
  
  // Modal
  modalOpen, modalContent, openModal, closeModal,
  
  // UI
  isScrolled, isMuted, toggleMute
} = useApp();
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Optimizations |
|------------|-------|---------------|
| Desktop | 1440px+ | Full experience |
| Laptop | 1024px - 1440px | Adjusted spacing |
| Tablet | 768px - 1024px | Touch-friendly, collapsible nav |

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

---

## 🎯 Key Features In Detail

### 🎬 Hero Section
- Full-screen autoplay background video (muted)
- Multi-layer gradient overlays for text readability
- Floating glass content panel with title, description, buttons
- Slow cinematic entrance animation with Framer Motion
- Subtle parallax on scroll for depth

### 🎴 Movie Cards
- Poster thumbnail with aspect ratio preservation
- Bottom glass info strip (hidden until hover)
- Hover effects: scale up, lift (Y-axis), deepen shadow
- Stagger-animated action buttons (play, add, like, info)
- Top 10 variant with large rank numbers

### 🪟 Modal/Detail View
- Fullscreen glass modal with vignette effect
- Background blur + dim overlay
- Trailer autoplay in header section
- Metadata displayed in floating glass panels
- Spring-based open/close animations

### 🔍 Search Experience
- Expandable glass search bar
- Real-time animated results dropdown
- Keyboard navigation (↑↓ arrows, Enter, Escape)
- Background blur when active
- "View all results" link to search page

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is for **educational purposes only**. 

Netflix is a registered trademark of Netflix, Inc. This clone is not affiliated with or endorsed by Netflix.

---

## 🙏 Acknowledgments

- Design inspiration from Netflix's 2024 interface
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Unsplash](https://unsplash.com/) - Placeholder images
- [Google Fonts](https://fonts.google.com/) - Inter & Bebas Neue

---

## 👤 Author

**Harsh Goyal**

- GitHub: [@Harshgoyal2004](https://github.com/Harshgoyal2004)
- Repository: [Netflix-clone](https://github.com/Harshgoyal2004/Netflix-clone)

---

<p align="center">
  <strong>⭐ Star this repo if you found it helpful!</strong>
</p>

<p align="center">
  Built with ❤️ using React, Tailwind CSS, and Framer Motion
</p>
