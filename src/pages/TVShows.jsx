import { motion } from 'framer-motion';
import MovieRow from '../components/MovieRow';
import MovieCard from '../components/MovieCard';
import { tvShows } from '../data/mockData';
import { pageTransition, staggerContainer, staggerItem } from '../motion/variants';

// ========================================
// TV Shows Page
// ========================================
const TVShows = () => {
    // Group shows by genre
    const dramaShows = tvShows.filter(show => show.genres.includes('Drama'));
    const sciFiShows = tvShows.filter(show =>
        show.genres.includes('Sci-Fi') || show.genres.includes('Fantasy')
    );
    const crimeShows = tvShows.filter(show =>
        show.genres.includes('Crime') || show.genres.includes('Thriller')
    );

    return (
        <motion.main
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen bg-surface-dark pt-[calc(var(--navbar-height)+40px)]"
        >
            {/* Page Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="px-[var(--content-padding)] mb-8"
            >
                <h1 className="text-3xl md:text-4xl font-display text-white mb-2">
                    TV Shows
                </h1>
                <p className="text-text-muted">
                    Binge-worthy series from around the world
                </p>
            </motion.div>

            {/* Featured Grid */}
            <motion.section
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="px-[var(--content-padding)] mb-12"
            >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {tvShows.slice(0, 8).map((show, index) => (
                        <motion.div
                            key={show.id}
                            variants={staggerItem}
                            className="aspect-video rounded-lg overflow-hidden relative group cursor-pointer"
                        >
                            <img
                                src={show.poster}
                                alt={show.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3 className="text-white font-semibold truncate">{show.title}</h3>
                                <p className="text-text-muted text-sm">{show.duration}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Category Rows */}
            <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="pb-20"
            >
                <MovieRow title="Drama Series" content={dramaShows} />
                <MovieRow title="Sci-Fi & Fantasy" content={sciFiShows} />
                <MovieRow title="Crime & Thrillers" content={crimeShows} />
            </motion.section>
        </motion.main>
    );
};

export default TVShows;
