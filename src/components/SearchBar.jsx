import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { allContent } from '../data/mockData';
import { searchResults, searchResultItem, fadeIn } from '../motion/variants';

// ========================================
// Icons
// ========================================
const SearchIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const CloseIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

// ========================================
// SearchBar Component
// ========================================
const SearchBar = () => {
    const { searchQuery, setSearchQuery, searchActive, setSearchActive, clearSearch } = useApp();
    const [localQuery, setLocalQuery] = useState('');
    const [results, setResults] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const inputRef = useRef(null);
    const containerRef = useRef(null);
    const navigate = useNavigate();

    // Focus input when search is activated
    useEffect(() => {
        if (searchActive && inputRef.current) {
            inputRef.current.focus();
        }
    }, [searchActive]);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                if (!localQuery) {
                    setSearchActive(false);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [localQuery, setSearchActive]);

    // Search logic
    useEffect(() => {
        if (localQuery.length >= 2) {
            const filtered = allContent
                .filter(item =>
                    item.title.toLowerCase().includes(localQuery.toLowerCase()) ||
                    item.genres.some(g => g.toLowerCase().includes(localQuery.toLowerCase()))
                )
                .slice(0, 6);
            setResults(filtered);
        } else {
            setResults([]);
        }
    }, [localQuery]);

    // Keyboard navigation
    const handleKeyDown = (e) => {
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev => Math.max(prev - 1, -1));
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0 && results[selectedIndex]) {
                    handleSelect(results[selectedIndex]);
                } else if (localQuery) {
                    handleSubmit();
                }
                break;
            case 'Escape':
                handleClose();
                break;
            default:
                break;
        }
    };

    const handleSubmit = () => {
        if (localQuery.trim()) {
            setSearchQuery(localQuery);
            navigate(`/search?q=${encodeURIComponent(localQuery)}`);
            setSearchActive(false);
            setResults([]);
        }
    };

    const handleSelect = (item) => {
        // TODO: Navigate to detail or open modal
        console.log('Selected:', item);
        handleClose();
    };

    const handleClose = () => {
        setLocalQuery('');
        setResults([]);
        setSelectedIndex(-1);
        setSearchActive(false);
        clearSearch();
    };

    return (
        <div ref={containerRef} className="relative">
            {/* Search Button / Input Container */}
            <motion.div
                className="flex items-center overflow-hidden"
                animate={{
                    width: searchActive ? 280 : 40,
                    backgroundColor: searchActive ? 'rgba(20, 20, 28, 0.9)' : 'transparent',
                }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                style={{
                    borderRadius: 4,
                    border: searchActive ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid transparent',
                }}
            >
                {/* Search Icon Button */}
                <button
                    onClick={() => setSearchActive(true)}
                    className="flex-shrink-0 p-2 text-text-muted hover:text-white transition-colors"
                    aria-label="Search"
                >
                    <SearchIcon />
                </button>

                {/* Input */}
                <AnimatePresence>
                    {searchActive && (
                        <motion.input
                            ref={inputRef}
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: '100%' }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2 }}
                            type="text"
                            value={localQuery}
                            onChange={(e) => setLocalQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Titles, people, genres"
                            className="flex-1 bg-transparent text-white text-sm placeholder-text-dim outline-none pr-2"
                        />
                    )}
                </AnimatePresence>

                {/* Close Button */}
                <AnimatePresence>
                    {searchActive && localQuery && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={handleClose}
                            className="flex-shrink-0 p-2 text-text-muted hover:text-white transition-colors"
                            aria-label="Clear search"
                        >
                            <CloseIcon />
                        </motion.button>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Search Results Dropdown */}
            <AnimatePresence>
                {searchActive && results.length > 0 && (
                    <motion.div
                        variants={searchResults}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-0 right-0 mt-2 glass-search rounded-lg overflow-hidden"
                    >
                        <div className="p-2">
                            {results.map((item, index) => (
                                <motion.button
                                    key={item.id}
                                    variants={searchResultItem}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => handleSelect(item)}
                                    className={`w-full flex items-center gap-3 p-2 rounded-md transition-colors ${index === selectedIndex
                                            ? 'bg-white/10'
                                            : 'hover:bg-white/5'
                                        }`}
                                >
                                    {/* Thumbnail */}
                                    <img
                                        src={item.poster}
                                        alt={item.title}
                                        className="w-12 h-16 object-cover rounded"
                                    />

                                    {/* Info */}
                                    <div className="flex-1 text-left">
                                        <p className="text-sm font-medium text-white truncate">{item.title}</p>
                                        <p className="text-xs text-text-muted">
                                            {item.year} • {item.type === 'series' ? 'Series' : 'Movie'}
                                        </p>
                                    </div>
                                </motion.button>
                            ))}
                        </div>

                        {/* View All Results */}
                        <button
                            onClick={handleSubmit}
                            className="w-full p-3 text-sm text-text-muted hover:text-white hover:bg-white/5 border-t border-glass-border transition-colors"
                        >
                            View all results for "{localQuery}"
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Backdrop blur when active */}
            <AnimatePresence>
                {searchActive && results.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-surface-dark/50 backdrop-blur-sm -z-10"
                        onClick={handleClose}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default SearchBar;
