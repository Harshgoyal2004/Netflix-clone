import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MovieCard from './MovieCard';
import { staggerContainer, staggerItem, scrollButtonVariants } from '../motion/variants';

// ========================================
// Icons
// ========================================
const ChevronLeftIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

// ========================================
// MovieRow Component
// ========================================
const MovieRow = ({ title, content, isTopTen = false }) => {
    const rowRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    const scrollAmount = 800;

    const handleScroll = () => {
        if (rowRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scrollLeft = () => {
        if (rowRef.current) {
            rowRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (rowRef.current) {
            rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    if (!content || content.length === 0) return null;

    return (
        <motion.section
            variants={staggerItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative mb-8 md:mb-12"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Row Title */}
            <motion.h2
                className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 px-[var(--content-padding)] flex items-center gap-2 group cursor-pointer"
                whileHover={{ x: 4 }}
            >
                {title}
                <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="text-accent-red text-sm font-medium hidden md:inline-flex items-center gap-1"
                >
                    Explore All
                    <ChevronRightIcon />
                </motion.span>
            </motion.h2>

            {/* Scrollable Row Container */}
            <div className="relative group">
                {/* Left Scroll Button */}
                <AnimatePresence>
                    {showLeftArrow && isHovered && (
                        <motion.button
                            variants={scrollButtonVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            whileHover="hover"
                            whileTap="tap"
                            onClick={scrollLeft}
                            className="absolute left-0 top-0 bottom-0 w-14 z-20 flex items-center justify-center bg-gradient-to-r from-surface-dark/95 via-surface-dark/70 to-transparent"
                            aria-label="Scroll left"
                        >
                            <span className="p-2 rounded-full bg-surface-mid/80 backdrop-blur-sm border border-white/10">
                                <ChevronLeftIcon />
                            </span>
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* Right Scroll Button */}
                <AnimatePresence>
                    {showRightArrow && isHovered && (
                        <motion.button
                            variants={scrollButtonVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            whileHover="hover"
                            whileTap="tap"
                            onClick={scrollRight}
                            className="absolute right-0 top-0 bottom-0 w-14 z-20 flex items-center justify-center bg-gradient-to-l from-surface-dark/95 via-surface-dark/70 to-transparent"
                            aria-label="Scroll right"
                        >
                            <span className="p-2 rounded-full bg-surface-mid/80 backdrop-blur-sm border border-white/10">
                                <ChevronRightIcon />
                            </span>
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* Scrollable Content */}
                <div
                    ref={rowRef}
                    onScroll={handleScroll}
                    className="flex gap-2 md:gap-3 overflow-x-auto hide-scrollbar px-[var(--content-padding)] pb-4"
                    style={{
                        scrollPaddingLeft: 'var(--content-padding)',
                    }}
                >
                    {content.map((item, index) => (
                        <MovieCard
                            key={item.id}
                            item={item}
                            index={index}
                            isTopTen={isTopTen}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default MovieRow;
