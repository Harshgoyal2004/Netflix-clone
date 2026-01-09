import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { navbarReveal, navLinkUnderline, dropdownMenu, fadeIn } from '../motion/variants';
import SearchBar from './SearchBar';

// ========================================
// Icons
// ========================================
const NetflixLogo = () => (
    <span
        className="text-2xl md:text-3xl font-bold tracking-tight"
        style={{
            color: '#e50914',
            fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
            letterSpacing: '0.05em',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}
    >
        NETFLIX
    </span>
);

const ChevronDownIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const BellIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
);

// ========================================
// Navigation Links
// ========================================
const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/tv-shows', label: 'TV Shows' },
    { to: '/movies', label: 'Movies' },
    { to: '/my-list', label: 'My List' },
];

// ========================================
// NavLink Component with Animation
// ========================================
const AnimatedNavLink = ({ to, label }) => {
    return (
        <NavLink to={to} className="relative group">
            {({ isActive }) => (
                <>
                    <span className={`text-sm font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-text-muted hover:text-white'
                        }`}>
                        {label}
                    </span>
                    <motion.span
                        className="absolute -bottom-1 left-0 h-0.5 bg-accent-red rounded-full"
                        initial={false}
                        animate={isActive ? { width: '100%', opacity: 1 } : { width: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    />
                </>
            )}
        </NavLink>
    );
};

// ========================================
// Profile Dropdown
// ========================================
const ProfileDropdown = ({ user, isOpen, onClose }) => {
    const navigate = useNavigate();

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={dropdownMenu}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute right-0 top-full mt-2 w-56 glass-panel rounded-lg overflow-hidden z-60"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Profile Section */}
                    <div className="p-4 border-b border-glass-border">
                        <div className="flex items-center gap-3">
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-10 h-10 rounded object-cover"
                            />
                            <div>
                                <p className="text-sm font-medium text-white">{user.name}</p>
                                <p className="text-xs text-text-muted">Switch Profile</p>
                            </div>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="p-2">
                        <button
                            className="w-full px-3 py-2 text-left text-sm text-text-muted hover:text-white hover:bg-white/5 rounded transition-colors"
                            onClick={() => navigate('/my-list')}
                        >
                            My List
                        </button>
                        <button className="w-full px-3 py-2 text-left text-sm text-text-muted hover:text-white hover:bg-white/5 rounded transition-colors">
                            Account
                        </button>
                        <button className="w-full px-3 py-2 text-left text-sm text-text-muted hover:text-white hover:bg-white/5 rounded transition-colors">
                            Help Center
                        </button>
                    </div>

                    {/* Sign Out */}
                    <div className="p-2 border-t border-glass-border">
                        <button className="w-full px-3 py-2 text-left text-sm text-text-muted hover:text-white hover:bg-white/5 rounded transition-colors">
                            Sign out of Netflix
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// ========================================
// Main Navbar Component
// ========================================
const Navbar = () => {
    const { user, isScrolled, setScrolled } = useApp();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Handle scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [setScrolled]);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <motion.header
            variants={navbarReveal}
            initial="hidden"
            animate="visible"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'glass-navbar shadow-lg'
                : 'bg-gradient-to-b from-surface-dark/90 to-transparent'
                }`}
        >
            <nav className="flex items-center justify-between h-[var(--navbar-height)] px-[var(--content-padding)]">
                {/* Left Section */}
                <div className="flex items-center gap-8">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <NetflixLogo />
                    </Link>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <AnimatedNavLink key={link.to} {...link} />
                        ))}
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    {/* Search */}
                    <SearchBar />

                    {/* Notifications */}
                    <button className="relative p-2 text-text-muted hover:text-white transition-colors">
                        <BellIcon />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-accent-red rounded-full" />
                    </button>

                    {/* Profile */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center gap-2 group"
                        >
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-8 h-8 rounded object-cover ring-2 ring-transparent group-hover:ring-white/20 transition-all"
                            />
                            <motion.span
                                animate={{ rotate: dropdownOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-text-muted"
                            >
                                <ChevronDownIcon />
                            </motion.span>
                        </button>

                        <ProfileDropdown
                            user={user}
                            isOpen={dropdownOpen}
                            onClose={() => setDropdownOpen(false)}
                        />
                    </div>
                </div>
            </nav>
        </motion.header>
    );
};

export default Navbar;
