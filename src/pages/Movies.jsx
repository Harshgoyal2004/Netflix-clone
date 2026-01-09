import { motion } from 'framer-motion';
import MovieRow from '../components/MovieRow';
import { movies } from '../data/mockData';
import { pageTransition, staggerContainer, staggerItem, fadeInUp } from '../motion/variants';

// ========================================
// Movies Page
// ========================================
const Movies = () => {
    // Group movies by genre
    const actionMovies = movies.filter(movie =>
        movie.genres.includes('Action') || movie.genres.includes('Adventure')
    );
    const dramaMovies = movies.filter(movie => movie.genres.includes('Drama'));
    const sciFiMovies = movies.filter(movie =>
        movie.genres.includes('Sci-Fi') || movie.genres.includes('Fantasy')
    );
    const thrillerMovies = movies.filter(movie =>
        movie.genres.includes('Thriller') || movie.genres.includes('Horror')
    );

    // Featured movie
    const featuredMovie = movies[0];

    return (
        <motion.main
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen bg-surface-dark"
        >
            {/* Featured Movie Banner */}
            <section className="relative h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
                <img
                    src={featuredMovie?.poster}
                    alt={featuredMovie?.title}
                    className="w-full h-full object-cover"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/90 via-transparent to-transparent" />

                {/* Content */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
                >
                    <motion.h1
                        variants={fadeInUp}
                        className="font-display text-4xl md:text-5xl text-white mb-4"
                    >
                        Movies
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg text-white/80 max-w-2xl"
                    >
                        From blockbuster action to intimate dramas, discover movies that move you.
                    </motion.p>
                </motion.div>
            </section>

            {/* Movie Rows */}
            <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 -mt-16 pb-20"
            >
                <MovieRow title="Action & Adventure" content={actionMovies} />
                <MovieRow title="Dramas" content={dramaMovies} />
                <MovieRow title="Sci-Fi & Fantasy" content={sciFiMovies} />
                <MovieRow title="Thrillers" content={thrillerMovies} />
            </motion.section>
        </motion.main>
    );
};

export default Movies;
