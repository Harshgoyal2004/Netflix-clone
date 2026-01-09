import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import {
    cardHover,
    cardInfoReveal,
    cardButtonsStagger,
    cardButton,
} from '../motion/variants';

// ========================================
// Icons
// ========================================
const PlayIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
    </svg>
);

const PlusIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
);

const CheckIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const ThumbUpIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

// ========================================
// MovieCard Component
// ========================================
const MovieCard = ({ item, index = 0, isTopTen = false }) => {
    const { addToList, removeFromList, isInList, openModal } = useApp();
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    const inList = isInList(item.id);

    const handleToggleList = (e) => {
        e.stopPropagation();
        if (inList) {
            removeFromList(item.id);
        } else {
            addToList(item);
        }
    };

    const handleOpenModal = () => {
        openModal(item);
    };

    return (
        <motion.div
            ref={cardRef}
            className="relative flex-shrink-0 group cursor-pointer"
            style={{
                width: isTopTen ? '280px' : '220px',
            }}
            initial="rest"
            whileHover="hover"
            animate="rest"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={handleOpenModal}
        >
            {/* Top 10 Rank Number */}
            {isTopTen && item.rank && (
                <div
                    className="absolute left-0 top-0 bottom-0 w-24 flex items-center justify-center z-10 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to right, rgba(10, 10, 15, 0.9), transparent)',
                    }}
                >
                    <span
                        className="font-display text-[120px] leading-none text-transparent"
                        style={{
                            WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
                        }}
                    >
                        {item.rank}
                    </span>
                </div>
            )}

            {/* Card Container */}
            <motion.div
                variants={cardHover}
                className="relative rounded-md overflow-hidden bg-surface-mid"
                style={{
                    aspectRatio: isTopTen ? '2/3' : '16/9',
                    marginLeft: isTopTen ? '60px' : 0,
                }}
            >
                {/* Poster Image */}
                <motion.img
                    src={item.poster}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />

                {/* Hover Overlay */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/60 to-transparent"
                        />
                    )}
                </AnimatePresence>

                {/* Glass Info Strip */}
                <motion.div
                    variants={cardInfoReveal}
                    className="absolute bottom-0 left-0 right-0 p-3 glass-card"
                >
                    {/* Title */}
                    <h3 className="text-sm font-semibold text-white truncate mb-1">
                        {item.title}
                    </h3>

                    {/* Metadata */}
                    <div className="flex items-center gap-2 text-xs text-text-muted">
                        <span className="text-green-500 font-medium">
                            {Math.floor(85 + Math.random() * 13)}% Match
                        </span>
                        <span>{item.year}</span>
                        <span className="px-1 border border-text-dim text-text-dim">
                            {item.maturityRating}
                        </span>
                    </div>

                    {/* Action Buttons */}
                    <motion.div
                        variants={cardButtonsStagger}
                        className="flex items-center gap-2 mt-3"
                    >
                        {/* Play Button */}
                        <motion.button
                            variants={cardButton}
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-surface-dark hover:bg-white/90 transition-colors"
                            aria-label="Play"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <PlayIcon />
                        </motion.button>

                        {/* Add to List Button */}
                        <motion.button
                            variants={cardButton}
                            className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all ${inList
                                    ? 'border-white bg-white/20 text-white'
                                    : 'border-text-muted text-text-muted hover:border-white hover:text-white'
                                }`}
                            aria-label={inList ? 'Remove from My List' : 'Add to My List'}
                            onClick={handleToggleList}
                        >
                            {inList ? <CheckIcon /> : <PlusIcon />}
                        </motion.button>

                        {/* Like Button */}
                        <motion.button
                            variants={cardButton}
                            className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-text-muted text-text-muted hover:border-white hover:text-white transition-all"
                            aria-label="Like"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ThumbUpIcon />
                        </motion.button>

                        {/* More Info Button */}
                        <motion.button
                            variants={cardButton}
                            className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-text-muted text-text-muted hover:border-white hover:text-white transition-all ml-auto"
                            aria-label="More Info"
                            onClick={handleOpenModal}
                        >
                            <ChevronDownIcon />
                        </motion.button>
                    </motion.div>

                    {/* Genres */}
                    <div className="flex items-center gap-1 mt-2 text-xs text-text-muted">
                        {item.genres.slice(0, 3).map((genre, i) => (
                            <span key={genre}>
                                {genre}
                                {i < Math.min(item.genres.length, 3) - 1 && (
                                    <span className="mx-1 text-accent-red">•</span>
                                )}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default MovieCard;
