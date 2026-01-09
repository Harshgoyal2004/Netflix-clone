import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { glassReveal } from '../motion/variants';

// ========================================
// GlassContainer Component
// A reusable glassmorphism container with configurable options
// ========================================

const GlassContainer = forwardRef(({
    children,
    className = '',
    variant = 'default', // 'default', 'dark', 'navbar', 'card', 'search', 'modal'
    blur = 'default', // 'light', 'default', 'heavy', 'modal'
    padding = 'default', // 'none', 'sm', 'default', 'lg', 'xl'
    rounded = 'default', // 'none', 'sm', 'default', 'lg', 'xl', 'full'
    border = true,
    shadow = true,
    animate = false,
    motionProps = {},
    as = 'div',
    ...props
}, ref) => {

    // Base glass styles for each variant
    const variantStyles = {
        default: 'bg-glass-gradient backdrop-blur-glass',
        dark: 'bg-glass-gradient-dark backdrop-blur-glass',
        navbar: 'glass-navbar',
        card: 'glass-card',
        search: 'glass-search',
        modal: 'glass-modal',
    };

    // Blur intensity
    const blurStyles = {
        none: '',
        light: 'backdrop-blur-glass-light',
        default: 'backdrop-blur-glass',
        heavy: 'backdrop-blur-glass-heavy',
        modal: 'backdrop-blur-modal',
    };

    // Padding sizes
    const paddingStyles = {
        none: '',
        sm: 'p-2',
        default: 'p-4',
        lg: 'p-6',
        xl: 'p-8',
    };

    // Border radius
    const roundedStyles = {
        none: '',
        sm: 'rounded-sm',
        default: 'rounded-lg',
        lg: 'rounded-xl',
        xl: 'rounded-2xl',
        full: 'rounded-full',
    };

    // Build class string
    const baseClasses = [
        variantStyles[variant] || variantStyles.default,
        variant === 'default' || variant === 'dark' ? blurStyles[blur] : '',
        paddingStyles[padding],
        roundedStyles[rounded],
        border && 'border border-glass-border',
        shadow && 'shadow-glass',
        className,
    ].filter(Boolean).join(' ');

    // Determine component to render
    const Component = animate ? motion[as] || motion.div : as;

    // Animation props
    const animationProps = animate ? {
        variants: glassReveal,
        initial: 'hidden',
        animate: 'visible',
        ...motionProps,
    } : {};

    return (
        <Component
            ref={ref}
            className={baseClasses}
            {...animationProps}
            {...props}
        >
            {children}
        </Component>
    );
});

GlassContainer.displayName = 'GlassContainer';

export default GlassContainer;
