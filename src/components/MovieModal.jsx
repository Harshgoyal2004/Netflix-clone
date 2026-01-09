import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import GlassContainer from './GlassContainer';
import { modalBackdrop, modalContent, staggerContainer, staggerItem, fadeInUp } from '../motion/variants';

// ========================================
// Icons
// ========================================
const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const PlayIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
    </svg>
);

const PlusIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
);

const CheckIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const ThumbUpIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
    </svg>
);

const VolumeOnIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    </svg>
);

const VolumeOffIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
    </svg>
);

// ========================================
// MovieModal Component
// ========================================
const MovieModal = () => {
    const { modalOpen, modalContent: content, closeModal, addToList, removeFromList, isInList, isMuted, toggleMute } = useApp();
    const modalRef = useRef(null);
    const videoRef = useRef(null);

    const inList = content ? isInList(content.id) : false;

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        if (modalOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [modalOpen, closeModal]);

    // Handle backdrop click
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const handleToggleList = () => {
        if (!content) return;
        if (inList) {
            removeFromList(content.id);
        } else {
            addToList(content);
        }
    };

    return (
        <AnimatePresence>
            {modalOpen && content && (
                <motion.div
                    variants={modalBackdrop}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto py-10"
                    onClick={handleBackdropClick}
                >
                    {/* Backdrop with blur and vignette */}
                    <div className="fixed inset-0 bg-surface-dark/80 backdrop-blur-md" />
                    <div className="fixed inset-0 gradient-overlay-vignette pointer-events-none" />

                    {/* Modal Content */}
                    <motion.div
                        ref={modalRef}
                        variants={modalContent}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative w-full max-w-4xl mx-4 glass-modal rounded-xl overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-surface-dark/80 text-white hover:bg-surface-dark transition-colors"
                            aria-label="Close modal"
                        >
                            <CloseIcon />
                        </button>

                        {/* Video/Image Header */}
                        <div className="relative aspect-video">
                            {/* Video */}
                            <video
                                ref={videoRef}
                                autoPlay
                                loop
                                muted={isMuted}
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source
                                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                    type="video/mp4"
                                />
                            </video>

                            {/* Fallback Image */}
                            <img
                                src={content.backdrop || content.poster}
                                alt={content.title}
                                className="absolute inset-0 w-full h-full object-cover -z-10"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,15,22,0.95)] via-transparent to-transparent" />

                            {/* Bottom Controls */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                                {/* Info and Buttons */}
                                <motion.div
                                    variants={staggerContainer}
                                    initial="hidden"
                                    animate="visible"
                                    className="flex-1"
                                >
                                    <motion.h2
                                        variants={fadeInUp}
                                        className="font-display text-3xl md:text-4xl text-white mb-4"
                                    >
                                        {content.title}
                                    </motion.h2>

                                    <motion.div
                                        variants={fadeInUp}
                                        className="flex items-center gap-3"
                                    >
                                        <button className="btn-primary">
                                            <PlayIcon />
                                            Play
                                        </button>

                                        <button
                                            onClick={handleToggleList}
                                            className={`btn-icon w-10 h-10 ${inList ? 'bg-white/20 border-white' : ''
                                                }`}
                                            aria-label={inList ? 'Remove from My List' : 'Add to My List'}
                                        >
                                            {inList ? <CheckIcon /> : <PlusIcon />}
                                        </button>

                                        <button className="btn-icon w-10 h-10" aria-label="Like">
                                            <ThumbUpIcon />
                                        </button>
                                    </motion.div>
                                </motion.div>

                                {/* Volume Control */}
                                <button
                                    onClick={toggleMute}
                                    className="btn-icon w-10 h-10"
                                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                                >
                                    {isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
                                </button>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-6 md:p-8">
                            <div className="grid md:grid-cols-3 gap-8">
                                {/* Main Info */}
                                <div className="md:col-span-2 space-y-4">
                                    {/* Metadata */}
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="text-green-500 font-semibold">
                                            {Math.floor(85 + Math.random() * 13)}% Match
                                        </span>
                                        <span className="text-text-muted">{content.year}</span>
                                        <span className="px-1.5 py-0.5 border border-text-dim text-text-dim text-xs">
                                            {content.maturityRating}
                                        </span>
                                        <span className="text-text-muted">{content.duration}</span>
                                        <span className="px-1.5 py-0.5 border border-text-dim text-text-dim text-xs rounded">
                                            HD
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-white/90 leading-relaxed">
                                        {content.description}
                                    </p>
                                </div>

                                {/* Side Info */}
                                <div className="space-y-4">
                                    {/* Cast placeholder */}
                                    <GlassContainer
                                        variant="card"
                                        padding="default"
                                        rounded="lg"
                                    >
                                        <p className="text-xs text-text-muted mb-1">Genres:</p>
                                        <p className="text-sm text-white">
                                            {content.genres.join(', ')}
                                        </p>
                                    </GlassContainer>

                                    {/* Tags */}
                                    <GlassContainer
                                        variant="card"
                                        padding="default"
                                        rounded="lg"
                                    >
                                        <p className="text-xs text-text-muted mb-1">This {content.type} is:</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="text-sm text-white">Suspenseful</span>
                                            <span className="text-sm text-white">•</span>
                                            <span className="text-sm text-white">Exciting</span>
                                            <span className="text-sm text-white">•</span>
                                            <span className="text-sm text-white">Dark</span>
                                        </div>
                                    </GlassContainer>
                                </div>
                            </div>

                            {/* More Like This */}
                            <div className="mt-10">
                                <h3 className="text-xl font-semibold text-white mb-4">More Like This</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {[1, 2, 3].map((i) => (
                                        <div
                                            key={i}
                                            className="relative aspect-video rounded-md overflow-hidden bg-surface-mid group cursor-pointer"
                                        >
                                            <img
                                                src={`https://images.unsplash.com/photo-${['1489599849927-2ee91cede3ba', '1536440136628-849c177e76a1', '1440404653325-ab127d49abc1'][i - 1]
                                                    }?w=400&q=80`}
                                                alt={`Similar content ${i}`}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 to-transparent" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MovieModal;
