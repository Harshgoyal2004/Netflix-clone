// ========================================
// Centralized Framer Motion Variants
// Netflix-Grade Cinematic Animations
// ========================================

// Easing curves
export const easings = {
    smooth: [0.4, 0, 0.2, 1],
    cinematic: [0.25, 0.46, 0.45, 0.94],
    bounceIn: [0.68, -0.55, 0.265, 1.55],
    easeOut: [0, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
};

// ========================================
// Fade Variants
// ========================================
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: easings.smooth,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: easings.easeIn,
        },
    },
};

export const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: easings.cinematic,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: easings.easeIn,
        },
    },
};

export const fadeInDown = {
    hidden: {
        opacity: 0,
        y: -30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: easings.cinematic,
        },
    },
    exit: {
        opacity: 0,
        y: 20,
        transition: {
            duration: 0.3,
            ease: easings.easeIn,
        },
    },
};

export const fadeInScale = {
    hidden: {
        opacity: 0,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: easings.smooth,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        transition: {
            duration: 0.25,
            ease: easings.easeIn,
        },
    },
};

// ========================================
// Stagger Containers
// ========================================
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

export const staggerContainerFast = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.05,
        },
    },
};

export const staggerContainerSlow = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

// ========================================
// Stagger Items
// ========================================
export const staggerItem = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: easings.smooth,
        },
    },
};

export const staggerItemScale = {
    hidden: {
        opacity: 0,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: easings.smooth,
        },
    },
};

// ========================================
// Card Hover Variants
// ========================================
export const cardHover = {
    rest: {
        scale: 1,
        y: 0,
        zIndex: 1,
        transition: {
            duration: 0.3,
            ease: easings.smooth,
        },
    },
    hover: {
        scale: 1.08,
        y: -10,
        zIndex: 10,
        transition: {
            duration: 0.35,
            ease: easings.cinematic,
        },
    },
};

export const cardExpand = {
    rest: {
        scale: 1,
        zIndex: 1,
    },
    hover: {
        scale: 1.5,
        zIndex: 50,
        transition: {
            delay: 0.5,
            duration: 0.4,
            ease: easings.cinematic,
        },
    },
};

export const cardInfoReveal = {
    rest: {
        opacity: 0,
        y: 10,
    },
    hover: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1,
            duration: 0.3,
            ease: easings.smooth,
        },
    },
};

export const cardButtonsStagger = {
    rest: {
        opacity: 0,
    },
    hover: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2,
        },
    },
};

export const cardButton = {
    rest: {
        opacity: 0,
        scale: 0.8,
    },
    hover: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.2,
            ease: easings.bounceIn,
        },
    },
};

// ========================================
// Modal Variants
// ========================================
export const modalBackdrop = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: easings.smooth,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.25,
            ease: easings.easeIn,
        },
    },
};

export const modalContent = {
    hidden: {
        opacity: 0,
        scale: 0.9,
        y: 40,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: 'spring',
            damping: 25,
            stiffness: 300,
            mass: 0.8,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        y: 20,
        transition: {
            duration: 0.25,
            ease: easings.easeIn,
        },
    },
};

// ========================================
// Hero Variants
// ========================================
export const heroTitle = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.98,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: easings.cinematic,
            delay: 0.2,
        },
    },
};

export const heroDescription = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: easings.cinematic,
            delay: 0.4,
        },
    },
};

export const heroButtons = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: easings.smooth,
            delay: 0.6,
        },
    },
};

export const heroGlassPanel = {
    hidden: {
        opacity: 0,
        x: -50,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: easings.cinematic,
            delay: 0.1,
        },
    },
};

// ========================================
// Navbar Variants
// ========================================
export const navbarReveal = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: easings.smooth,
        },
    },
};

export const navLinkUnderline = {
    rest: {
        width: 0,
        opacity: 0,
    },
    hover: {
        width: '100%',
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: easings.smooth,
        },
    },
    active: {
        width: '100%',
        opacity: 1,
    },
};

export const dropdownMenu = {
    hidden: {
        opacity: 0,
        scale: 0.95,
        y: -10,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.2,
            ease: easings.smooth,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        y: -10,
        transition: {
            duration: 0.15,
            ease: easings.easeIn,
        },
    },
};

// ========================================
// Search Variants
// ========================================
export const searchExpand = {
    collapsed: {
        width: 40,
        paddingLeft: 0,
        paddingRight: 0,
    },
    expanded: {
        width: 280,
        paddingLeft: 16,
        paddingRight: 16,
        transition: {
            duration: 0.3,
            ease: easings.smooth,
        },
    },
};

export const searchResults = {
    hidden: {
        opacity: 0,
        y: -10,
        height: 0,
    },
    visible: {
        opacity: 1,
        y: 0,
        height: 'auto',
        transition: {
            duration: 0.3,
            ease: easings.smooth,
        },
    },
    exit: {
        opacity: 0,
        y: -10,
        height: 0,
        transition: {
            duration: 0.2,
            ease: easings.easeIn,
        },
    },
};

export const searchResultItem = {
    hidden: {
        opacity: 0,
        x: -10,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.2,
            ease: easings.smooth,
        },
    },
};

// ========================================
// Parallax Scroll
// ========================================
export const parallaxSlow = {
    initial: { y: 0 },
    scroll: (scrollY) => ({
        y: scrollY * 0.3,
    }),
};

export const parallaxFast = {
    initial: { y: 0 },
    scroll: (scrollY) => ({
        y: scrollY * 0.6,
    }),
};

// ========================================
// Glass Reveal
// ========================================
export const glassReveal = {
    hidden: {
        opacity: 0,
        backdropFilter: 'blur(0px)',
        scale: 0.98,
    },
    visible: {
        opacity: 1,
        backdropFilter: 'blur(20px)',
        scale: 1,
        transition: {
            duration: 0.5,
            ease: easings.cinematic,
        },
    },
};

// ========================================
// Scroll Button Variants
// ========================================
export const scrollButtonVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.2,
        },
    },
    hover: {
        scale: 1.1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    tap: {
        scale: 0.95,
    },
};

// ========================================
// Page Transitions
// ========================================
export const pageTransition = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: easings.smooth,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: easings.easeIn,
        },
    },
};

// ========================================
// Loading Skeleton
// ========================================
export const skeletonPulse = {
    animate: {
        opacity: [0.5, 1, 0.5],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
        },
    },
};
