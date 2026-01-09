# 🎬 Netflix Clone - Premium React Frontend

A **Netflix-grade React frontend** with glassmorphism design, cinematic motion animations, and a premium visual experience. Built as a 2025 Netflix redesign concept showcasing modern web development practices.

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=for-the-badge&logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## ✨ Features

### 🎨 Design Philosophy
- **Dark, cinematic UI** - Premium feel with deep shadows and rich gradients
- **Glassmorphism** - Selective use of blur effects for depth and elegance
- **Motion-first design** - Every interaction is animated for a fluid experience
- **High contrast typography** - Readable and visually striking

### 🏠 Pages
| Page | Description |
|------|-------------|
| **Home** | Hero section with video background, featured content, and browsable movie rows |
| **TV Shows** | Filtered grid and rows of TV series content |
| **Movies** | Movie-focused browsing with genre categories |
| **My List** | Personal watchlist with add/remove functionality |
| **Search** | Real-time search with animated results grid |

### 🧩 Components
| Component | Features |
|-----------|----------|
| **Navbar** | Glass effect, scroll detection, animated links, profile dropdown |
| **Hero** | Autoplay video, parallax scroll, multi-layer gradients, glass panel |
| **MovieCard** | Hover lift animation, glass info strip, staggered action buttons |
| **MovieRow** | Horizontal scroll, custom navigation buttons, smooth animations |
| **MovieModal** | Fullscreen glass modal, spring animations, video preview |
| **SearchBar** | Expandable input, real-time results, keyboard navigation |

### 🎭 Animation System
- **Centralized motion variants** - All animations defined in `src/motion/variants.js`
- **Stagger containers** - Sequential reveal animations for lists
- **Spring physics** - Natural, organic motion for modals
- **Parallax scrolling** - Depth effect on hero section
- **Hover states** - Scale, lift, and shadow transitions

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework with hooks |
| **Vite 7** | Lightning-fast build tool |
| **Tailwind CSS 4** | Utility-first styling with custom theme |
| **Framer Motion 11** | Production-ready animations |
| **React Router 7** | Client-side routing |
| **Context API** | Global state management |

---

## 📁 Project Structure

```
netflix/
├── public/
│   └── videos/              # Background/preview videos
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── GlassContainer.jsx   # Glassmorphism wrapper
│   │   ├── Navbar.jsx           # Navigation with glass effect
│   │   ├── Hero.jsx             # Full-screen hero section
│   │   ├── MovieCard.jsx        # Content card with hover effects
│   │   ├── MovieRow.jsx         # Horizontal scrollable row
│   │   ├── MovieModal.jsx       # Detail modal overlay
│   │   └── SearchBar.jsx        # Animated search input
│   ├── pages/               # Route pages
│   │   ├── Home.jsx
│   │   ├── TVShows.jsx
│   │   ├── Movies.jsx
│   │   ├── MyList.jsx
│   │   └── Search.jsx
│   ├── context/             # State management
│   │   └── AppContext.jsx       # Global app state
│   ├── motion/              # Animation system
│   │   └── variants.js          # Framer Motion variants
│   ├── data/                # Mock data
│   │   └── mockData.js          # Sample content
│   ├── App.jsx              # Root component with routing
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles & Tailwind
├── tailwind.config.js       # Custom Tailwind theme
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd netflix

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

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-surface-dark` | `#0a0a0f` | Main background |
| `--color-surface-mid` | `#141418` | Card backgrounds |
| `--color-surface-light` | `#1a1a20` | Elevated surfaces |
| `--color-accent-red` | `#e50914` | Primary CTA, Netflix red |
| `--color-glass-dark` | `rgba(10,10,15,0.7)` | Glass backgrounds |
| `--color-glass-border` | `rgba(255,255,255,0.08)` | Glass borders |
| `--color-text-primary` | `#ffffff` | Primary text |
| `--color-text-muted` | `#8c8c8c` | Secondary text |

### Glassmorphism Rules

```css
/* Standard glass panel */
.glass-panel {
  background: linear-gradient(135deg, rgba(20,20,30,0.8), rgba(10,10,15,0.6));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
}
```

**Allowed Glass Zones:**
- ✅ Navbar
- ✅ Search bar
- ✅ Profile dropdown
- ✅ Hover info panels
- ✅ Modals

**Prohibited:**
- ❌ No white glass
- ❌ No excessive blur everywhere
- ❌ No glass on every element

### Typography

| Font | Usage |
|------|-------|
| **Bebas Neue** | Display headings, hero titles |
| **Inter** | Body text, UI elements |

---

## 🎬 Animation Variants

All animations are centralized in `src/motion/variants.js`:

```javascript
// Example: Card hover animation
export const cardHover = {
  rest: { scale: 1, y: 0, zIndex: 1 },
  hover: { 
    scale: 1.08, 
    y: -10, 
    zIndex: 10,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// Example: Modal with spring physics
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

---

## 🔧 State Management

The app uses React Context API for global state:

```javascript
// Available state & actions
const {
  // User
  user,
  
  // My List
  myList,
  addToList,
  removeFromList,
  isInList,
  
  // Search
  searchQuery,
  searchActive,
  setSearchQuery,
  setSearchActive,
  clearSearch,
  
  // Modal
  modalOpen,
  modalContent,
  openModal,
  closeModal,
  
  // UI
  isScrolled,
  isMuted,
  toggleMute
} = useApp();
```

---

## 📱 Responsive Design

The app is optimized for:
- **Desktop** (1440px+)
- **Laptop** (1024px - 1440px)
- **Tablet** (768px - 1024px)

Key responsive features:
- Fluid typography scaling
- Adaptive grid layouts
- Touch-friendly interactions on tablet
- Collapsible navigation

---

## 🎯 Key Features Breakdown

### Hero Section
- Full-screen autoplay background video (muted)
- Multi-layer gradient overlays for readability
- Floating glass content panel with title, description, buttons
- Slow cinematic entrance animation
- Subtle parallax on scroll

### Movie Cards
- Poster thumbnail with aspect ratio preservation
- Bottom glass info strip (hidden until hover)
- Hover effects: scale up, lift (Y-axis), deepen shadow
- Stagger-animated action buttons (play, add, like, info)
- Smooth layout transitions

### Modal/Detail View
- Fullscreen glass modal with vignette
- Background blur + dim effect
- Trailer autoplay in header
- Metadata in floating glass panels
- Spring-based open/close animations

### Search Experience
- Expandable glass search bar
- Real-time animated results dropdown
- Keyboard navigation (arrow keys, enter, escape)
- Background blur when active
- "View all results" link to search page

---

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is for educational purposes only. Netflix is a registered trademark of Netflix, Inc. This clone is not affiliated with or endorsed by Netflix.

---

## 🙏 Acknowledgments

- Design inspiration from Netflix's 2024 interface
- [Framer Motion](https://www.framer.com/motion/) for animation library
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Unsplash](https://unsplash.com/) for placeholder images

---

<p align="center">
  Built with ❤️ using React, Tailwind CSS, and Framer Motion
</p>
