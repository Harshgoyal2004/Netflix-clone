import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import MovieCard from '../components/MovieCard';
import GlassContainer from '../components/GlassContainer';
import { pageTransition, staggerContainer, staggerItem, fadeInUp } from '../motion/variants';

// ========================================
// My List Page
// ========================================
const MyList = () => {
    const { myList } = useApp();

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
                    My List
                </h1>
                <p className="text-text-muted">
                    {myList.length > 0
                        ? `${myList.length} title${myList.length > 1 ? 's' : ''} saved`
                        : 'Your personal collection'
                    }
                </p>
            </motion.div>

            {/* Content */}
            <div className="px-[var(--content-padding)] pb-20">
                <AnimatePresence mode="wait">
                    {myList.length > 0 ? (
                        <motion.div
                            key="list"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
                        >
                            {myList.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    variants={staggerItem}
                                    layout
                                    className="aspect-video"
                                >
                                    <div className="relative h-full rounded-lg overflow-hidden group cursor-pointer">
                                        <img
                                            src={item.poster}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="text-white font-semibold text-sm truncate">
                                                {item.title}
                                            </h3>
                                            <p className="text-text-muted text-xs">
                                                {item.year} • {item.type === 'series' ? 'Series' : 'Movie'}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="empty"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="flex flex-col items-center justify-center py-20"
                        >
                            <GlassContainer
                                variant="default"
                                padding="xl"
                                rounded="xl"
                                className="text-center max-w-md"
                            >
                                {/* Empty State Icon */}
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-surface-mid flex items-center justify-center">
                                    <svg className="w-10 h-10 text-text-dim" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Your list is empty
                                </h3>
                                <p className="text-text-muted mb-6">
                                    Add movies and TV shows to your list to watch them later.
                                </p>

                                <a
                                    href="/"
                                    className="btn-primary inline-flex"
                                >
                                    Browse Content
                                </a>
                            </GlassContainer>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.main>
    );
};

export default MyList;
