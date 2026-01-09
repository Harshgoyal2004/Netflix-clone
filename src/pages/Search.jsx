import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { allContent, getUniqueContent } from '../data/mockData';
import GlassContainer from '../components/GlassContainer';
import { pageTransition, staggerContainer, staggerItem, fadeInUp } from '../motion/variants';

// ========================================
// Search Results Page
// ========================================
const Search = () => {
    const [searchParams] = useSearchParams();
    const { openModal } = useApp();
    const query = searchParams.get('q') || '';

    // Filter results
    const results = useMemo(() => {
        if (!query || query.length < 2) return [];

        const filtered = allContent.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.genres.some(g => g.toLowerCase().includes(query.toLowerCase()))
        );

        return getUniqueContent(filtered);
    }, [query]);

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
                {query ? (
                    <>
                        <p className="text-text-muted text-sm mb-1">Search results for</p>
                        <h1 className="text-3xl md:text-4xl font-display text-white">
                            "{query}"
                        </h1>
                        <p className="text-text-muted mt-2">
                            {results.length} result{results.length !== 1 ? 's' : ''} found
                        </p>
                    </>
                ) : (
                    <h1 className="text-3xl md:text-4xl font-display text-white">
                        Search
                    </h1>
                )}
            </motion.div>

            {/* Results Grid */}
            <div className="px-[var(--content-padding)] pb-20">
                <AnimatePresence mode="wait">
                    {results.length > 0 ? (
                        <motion.div
                            key="results"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
                        >
                            {results.map((item) => (
                                <motion.div
                                    key={item.id}
                                    variants={staggerItem}
                                    layout
                                    className="group cursor-pointer"
                                    onClick={() => openModal(item)}
                                >
                                    <div className="relative aspect-video rounded-lg overflow-hidden bg-surface-mid">
                                        <img
                                            src={item.poster}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Play Icon */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                                <svg className="w-5 h-5 text-surface-dark ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Info */}
                                        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="text-white font-semibold text-sm truncate">
                                                {item.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-xs text-text-muted">
                                                <span>{item.year}</span>
                                                <span>•</span>
                                                <span>{item.type === 'series' ? 'Series' : 'Movie'}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mobile Info */}
                                    <div className="mt-2 md:hidden">
                                        <h3 className="text-white text-sm font-medium truncate">
                                            {item.title}
                                        </h3>
                                        <p className="text-text-muted text-xs">{item.year}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : query ? (
                        <motion.div
                            key="no-results"
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
                                {/* No Results Icon */}
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-surface-mid flex items-center justify-center">
                                    <svg className="w-10 h-10 text-text-dim" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2">
                                    No results found
                                </h3>
                                <p className="text-text-muted mb-6">
                                    We couldn't find anything matching "{query}". Try searching for something else.
                                </p>

                                <a
                                    href="/"
                                    className="btn-secondary inline-flex"
                                >
                                    Browse All
                                </a>
                            </GlassContainer>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="search-prompt"
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
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-surface-mid flex items-center justify-center">
                                    <svg className="w-10 h-10 text-text-dim" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Search for movies and shows
                                </h3>
                                <p className="text-text-muted">
                                    Use the search bar above to find your favorite content.
                                </p>
                            </GlassContainer>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.main>
    );
};

export default Search;
