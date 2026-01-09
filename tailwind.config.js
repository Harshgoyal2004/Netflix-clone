/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glass-dark': 'rgba(10, 10, 15, 0.7)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
        'surface-dark': '#0a0a0f',
        'surface-mid': '#141418',
        'surface-light': '#1a1a20',
        'accent-red': '#e50914',
        'accent-red-hover': '#f40612',
        'accent-glow': 'rgba(229, 9, 20, 0.4)',
        'text-primary': '#ffffff',
        'text-muted': '#8c8c8c',
        'text-dim': '#5c5c5c',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'glass-hover': '0 12px 48px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        'card': '0 4px 16px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 16px 48px rgba(0, 0, 0, 0.5)',
        'glow': '0 0 30px rgba(229, 9, 20, 0.5)',
        'glow-sm': '0 0 15px rgba(229, 9, 20, 0.3)',
        'depth-1': '0 2px 8px rgba(0, 0, 0, 0.2)',
        'depth-2': '0 4px 16px rgba(0, 0, 0, 0.3)',
        'depth-3': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'depth-4': '0 16px 64px rgba(0, 0, 0, 0.5)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        'glass': '20px',
        'glass-light': '12px',
        'glass-heavy': '28px',
        'modal': '40px',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(20, 20, 30, 0.8) 0%, rgba(10, 10, 15, 0.6) 100%)',
        'glass-gradient-dark': 'linear-gradient(135deg, rgba(10, 10, 15, 0.9) 0%, rgba(5, 5, 10, 0.7) 100%)',
        'hero-gradient': 'linear-gradient(to top, rgba(10, 10, 15, 1) 0%, rgba(10, 10, 15, 0.7) 30%, transparent 100%)',
        'hero-side': 'linear-gradient(to right, rgba(10, 10, 15, 0.9) 0%, transparent 50%)',
        'vignette': 'radial-gradient(ellipse at center, transparent 0%, rgba(10, 10, 15, 0.8) 100%)',
        'card-fade': 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%)',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Bebas Neue', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(229, 9, 20, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(229, 9, 20, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'cinematic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}
