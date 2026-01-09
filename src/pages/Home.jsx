import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import { featuredContent, categoryRows } from '../data/mockData';
import { staggerContainer, pageTransition } from '../motion/variants';

// ========================================
// Home Page
// ========================================
const Home = () => {
    return (
        <motion.main
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen bg-surface-dark"
        >
            {/* Hero Section */}
            <Hero content={featuredContent} />

            {/* Category Rows */}
            <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 -mt-32 pb-20"
            >
                {categoryRows.map((row) => (
                    <MovieRow
                        key={row.id}
                        title={row.title}
                        content={row.content}
                        isTopTen={row.isTopTen}
                    />
                ))}
            </motion.section>
        </motion.main>
    );
};

export default Home;
