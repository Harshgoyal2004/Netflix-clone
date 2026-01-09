import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { heroTitle, heroDescription, heroButtons, heroGlassPanel, staggerContainer } from '../motion/variants';
import GlassContainer from './GlassContainer';

// ========================================
// Icons
// ========================================
const PlayIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
    </svg>
);

const InfoIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
// Hero Component
// ========================================
const Hero = ({ content }) => {
    const { isMuted, toggleMute, openModal } = useApp();
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    // Parallax scroll effect
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

    // Handle video load
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.addEventListener('loadeddata', () => setVideoLoaded(true));
        }
    }, []);

    if (!content) return null;

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden"
        >
            {/* Background Video/Image with Parallax */}
            <motion.div
                className="absolute inset-0"
                style={{ y, scale }}
            >
                {/* Video Background */}
                {content.trailer && (
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted={isMuted}
                        playsInline
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <source src={content.trailer} type="video/mp4" />
                    </video>
                )}

                {/* Fallback Image */}
                <img
                    src={content.backdrop}
                    alt={content.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-0' : 'opacity-100'
                        }`}
                />
            </motion.div>

            {/* Multi-layer Gradient Overlays */}
            <div className="absolute inset-0 gradient-overlay-bottom" />
            <div className="absolute inset-0 gradient-overlay-left" />
            <motion.div
                className="absolute inset-0 gradient-overlay-vignette"
                style={{ opacity }}
            />

            {/* Content */}
            <motion.div
                className="relative h-full flex items-end pb-20 md:pb-28 px-[var(--content-padding)]"
                style={{ opacity }}
            >
                <div className="max-w-3xl">
                    {/* Glass Panel Container */}
                    <motion.div
                        variants={heroGlassPanel}
                        initial="hidden"
                        animate="visible"
                    >
                        <GlassContainer
                            variant="default"
                            padding="lg"
                            rounded="xl"
                            className="max-w-2xl"
                            animate
                        >
                            {/* Content Type Badge */}
                            <motion.div
                                variants={heroTitle}
                                initial="hidden"
                                animate="visible"
                                className="flex items-center gap-2 mb-4"
                            >
                                <span className="px-2 py-1 bg-accent-red/90 text-white text-xs font-semibold uppercase tracking-wider rounded">
                                    {content.type === 'series' ? 'Series' : 'Film'}
                                </span>
                                <span className="text-text-muted text-sm">{content.year}</span>
                                <span className="text-text-muted text-sm">•</span>
                                <span className="text-text-muted text-sm">{content.maturityRating}</span>
                            </motion.div>

                            {/* Title */}
                            <motion.h1
                                variants={heroTitle}
                                initial="hidden"
                                animate="visible"
                                className="font-display text-display-lg md:text-display-xl text-white text-shadow-lg mb-4 tracking-tight"
                            >
                                {content.title}
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                variants={heroDescription}
                                initial="hidden"
                                animate="visible"
                                className="text-base md:text-lg text-white/90 leading-relaxed mb-6 line-clamp-3"
                            >
                                {content.description}
                            </motion.p>

                            {/* Genres */}
                            <motion.div
                                variants={heroDescription}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-wrap gap-2 mb-6"
                            >
                                {content.genres.map((genre) => (
                                    <span
                                        key={genre}
                                        className="px-3 py-1 bg-white/10 text-white/80 text-xs font-medium rounded-full border border-white/10"
                                    >
                                        {genre}
                                    </span>
                                ))}
                            </motion.div>

                            {/* Buttons */}
                            <motion.div
                                variants={heroButtons}
                                initial="hidden"
                                animate="visible"
                                className="flex items-center gap-4"
                            >
                                <button className="btn-primary text-base">
                                    <PlayIcon />
                                    Play
                                </button>
                                <button
                                    onClick={() => openModal(content)}
                                    className="btn-secondary text-base"
                                >
                                    <InfoIcon />
                                    More Info
                                </button>
                            </motion.div>
                        </GlassContainer>
                    </motion.div>
                </div>
            </motion.div>

            {/* Mute/Unmute Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                onClick={toggleMute}
                className="absolute bottom-20 right-[var(--content-padding)] flex items-center gap-3 px-4 py-2 bg-surface-dark/60 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-surface-dark/80 transition-all group"
            >
                <span className={isMuted ? 'animate-pulse' : ''}>
                    {isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
                </span>
                <span className="text-sm font-medium hidden md:inline">
                    {isMuted ? 'Unmute' : 'Mute'}
                </span>

                {/* Maturity Rating */}
                <span className="px-2 py-0.5 bg-surface-mid border-l border-white/20 text-sm ml-2">
                    {content.maturityRating}
                </span>
            </motion.button>
        </section>
    );
};

export default Hero;
