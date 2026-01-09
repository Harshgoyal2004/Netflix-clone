// ========================================
// Mock Data for Netflix Clone
// Premium Content Simulation
// ========================================

// Featured content for hero section
export const featuredContent = {
    id: 'featured-1',
    title: 'The Crown',
    description: 'This drama follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the twentieth century.',
    type: 'series',
    year: 2024,
    maturityRating: 'TV-MA',
    seasons: 6,
    genres: ['Drama', 'Biography', 'History'],
    backdrop: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=80',
    logo: null,
    trailer: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
};

// Movie/Show data generator
const generateContent = (id, title, type, genres, year, backdrop) => ({
    id,
    title,
    type,
    genres,
    year,
    maturityRating: ['TV-14', 'TV-MA', 'PG-13', 'R'][Math.floor(Math.random() * 4)],
    rating: (Math.random() * 2 + 3).toFixed(1),
    duration: type === 'movie' ? `${Math.floor(Math.random() * 60 + 90)}m` : `${Math.floor(Math.random() * 5 + 1)} Seasons`,
    backdrop,
    poster: backdrop,
    description: `An epic ${type} that explores themes of ${genres.slice(0, 2).join(' and ').toLowerCase()}.`,
});

// Trending Now
export const trendingNow = [
    generateContent('t1', 'Oppenheimer', 'movie', ['Biography', 'Drama', 'History'], 2023, 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&q=80'),
    generateContent('t2', 'Wednesday', 'series', ['Comedy', 'Fantasy', 'Mystery'], 2023, 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&q=80'),
    generateContent('t3', 'Glass Onion', 'movie', ['Comedy', 'Crime', 'Drama'], 2022, 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&q=80'),
    generateContent('t4', 'Stranger Things', 'series', ['Drama', 'Fantasy', 'Horror'], 2022, 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&q=80'),
    generateContent('t5', 'The Menu', 'movie', ['Comedy', 'Horror', 'Thriller'], 2022, 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&q=80'),
    generateContent('t6', 'Squid Game', 'series', ['Action', 'Drama', 'Mystery'], 2021, 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=500&q=80'),
    generateContent('t7', 'Knives Out', 'movie', ['Comedy', 'Crime', 'Drama'], 2019, 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&q=80'),
    generateContent('t8', 'The Witcher', 'series', ['Action', 'Adventure', 'Fantasy'], 2023, 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=500&q=80'),
];

// Netflix Originals
export const netflixOriginals = [
    generateContent('n1', 'The Queen\'s Gambit', 'series', ['Drama'], 2020, 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=500&q=80'),
    generateContent('n2', 'Money Heist', 'series', ['Action', 'Crime', 'Drama'], 2021, 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=500&q=80'),
    generateContent('n3', 'Extraction', 'movie', ['Action', 'Thriller'], 2023, 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=500&q=80'),
    generateContent('n4', 'Dark', 'series', ['Crime', 'Drama', 'Mystery'], 2020, 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=500&q=80'),
    generateContent('n5', 'Bird Box', 'movie', ['Drama', 'Horror', 'Sci-Fi'], 2018, 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80'),
    generateContent('n6', 'Ozark', 'series', ['Crime', 'Drama', 'Thriller'], 2022, 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500&q=80'),
    generateContent('n7', 'The Irishman', 'movie', ['Biography', 'Crime', 'Drama'], 2019, 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80'),
    generateContent('n8', 'Lupin', 'series', ['Action', 'Crime', 'Drama'], 2023, 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500&q=80'),
];

// Top 10 in Your Country
export const topTen = [
    { ...generateContent('top1', 'Leave the World Behind', 'movie', ['Drama', 'Mystery', 'Thriller'], 2023, 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&q=80'), rank: 1 },
    { ...generateContent('top2', 'Rebel Moon', 'movie', ['Action', 'Adventure', 'Drama'], 2023, 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&q=80'), rank: 2 },
    { ...generateContent('top3', 'Berlin', 'series', ['Action', 'Crime', 'Drama'], 2023, 'https://images.unsplash.com/photo-1560109947-543149eceb16?w=500&q=80'), rank: 3 },
    { ...generateContent('top4', 'All Quiet on Western Front', 'movie', ['Action', 'Drama', 'War'], 2022, 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500&q=80'), rank: 4 },
    { ...generateContent('top5', 'The Diplomat', 'series', ['Drama', 'Thriller'], 2023, 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=500&q=80'), rank: 5 },
    { ...generateContent('top6', 'Society of the Snow', 'movie', ['Biography', 'Drama', 'History'], 2023, 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=500&q=80'), rank: 6 },
    { ...generateContent('top7', 'Maestro', 'movie', ['Biography', 'Drama', 'Music'], 2023, 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&q=80'), rank: 7 },
    { ...generateContent('top8', 'Beckham', 'series', ['Biography', 'Documentary', 'Sport'], 2023, 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&q=80'), rank: 8 },
    { ...generateContent('top9', 'Pain Hustlers', 'movie', ['Crime', 'Drama'], 2023, 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&q=80'), rank: 9 },
    { ...generateContent('top10', 'Bodies', 'series', ['Crime', 'Drama', 'Sci-Fi'], 2023, 'https://images.unsplash.com/photo-1534294228306-bd54eb9a7ba8?w=500&q=80'), rank: 10 },
];

// Action & Adventure
export const actionAdventure = [
    generateContent('a1', 'Red Notice', 'movie', ['Action', 'Comedy', 'Crime'], 2021, 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&q=80'),
    generateContent('a2', 'The Gray Man', 'movie', ['Action', 'Thriller'], 2022, 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=500&q=80'),
    generateContent('a3', 'Army of the Dead', 'movie', ['Action', 'Crime', 'Horror'], 2021, 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80'),
    generateContent('a4', 'Kate', 'movie', ['Action', 'Thriller'], 2021, 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&q=80'),
    generateContent('a5', 'Old Guard', 'movie', ['Action', 'Fantasy'], 2020, 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&q=80'),
    generateContent('a6', '6 Underground', 'movie', ['Action', 'Thriller'], 2019, 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&q=80'),
];

// Sci-Fi & Fantasy
export const sciFiFantasy = [
    generateContent('sf1', 'Dune', 'movie', ['Action', 'Adventure', 'Drama'], 2021, 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&q=80'),
    generateContent('sf2', '3 Body Problem', 'series', ['Drama', 'Mystery', 'Sci-Fi'], 2024, 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=500&q=80'),
    generateContent('sf3', 'Interstellar', 'movie', ['Adventure', 'Drama', 'Sci-Fi'], 2014, 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=500&q=80'),
    generateContent('sf4', 'Altered Carbon', 'series', ['Action', 'Drama', 'Sci-Fi'], 2020, 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80'),
    generateContent('sf5', 'The 100', 'series', ['Drama', 'Mystery', 'Sci-Fi'], 2020, 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&q=80'),
    generateContent('sf6', 'Love, Death & Robots', 'series', ['Animation', 'Comedy', 'Horror'], 2022, 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&q=80'),
];

// Drama
export const dramas = [
    generateContent('d1', 'The Crown', 'series', ['Biography', 'Drama', 'History'], 2023, 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80'),
    generateContent('d2', 'Breaking Bad', 'series', ['Crime', 'Drama', 'Thriller'], 2013, 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500&q=80'),
    generateContent('d3', 'The Social Network', 'movie', ['Biography', 'Drama'], 2010, 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80'),
    generateContent('d4', 'Mindhunter', 'series', ['Crime', 'Drama', 'Thriller'], 2019, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80'),
    generateContent('d5', 'Marriage Story', 'movie', ['Comedy', 'Drama', 'Romance'], 2019, 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&q=80'),
    generateContent('d6', 'The Two Popes', 'movie', ['Biography', 'Comedy', 'Drama'], 2019, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80'),
];

// TV Shows Only
export const tvShows = [
    ...netflixOriginals.filter(c => c.type === 'series'),
    ...trendingNow.filter(c => c.type === 'series'),
    ...sciFiFantasy.filter(c => c.type === 'series'),
    ...dramas.filter(c => c.type === 'series'),
];

// Movies Only
export const movies = [
    ...trendingNow.filter(c => c.type === 'movie'),
    ...netflixOriginals.filter(c => c.type === 'movie'),
    ...actionAdventure.filter(c => c.type === 'movie'),
    ...sciFiFantasy.filter(c => c.type === 'movie'),
    ...dramas.filter(c => c.type === 'movie'),
];

// All content for search
export const allContent = [
    ...trendingNow,
    ...netflixOriginals,
    ...topTen,
    ...actionAdventure,
    ...sciFiFantasy,
    ...dramas,
];

// Get unique content (by id)
export const getUniqueContent = (contentArray) => {
    const seen = new Set();
    return contentArray.filter(item => {
        if (seen.has(item.id)) return false;
        seen.add(item.id);
        return true;
    });
};

// Genres list
export const genres = [
    'Action',
    'Adventure',
    'Animation',
    'Biography',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'History',
    'Horror',
    'Music',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Sport',
    'Thriller',
    'War',
];

// Category rows for home page
export const categoryRows = [
    { id: 'trending', title: 'Trending Now', content: trendingNow },
    { id: 'originals', title: 'Netflix Originals', content: netflixOriginals },
    { id: 'top10', title: 'Top 10 in Your Country Today', content: topTen, isTopTen: true },
    { id: 'action', title: 'Action & Adventure', content: actionAdventure },
    { id: 'scifi', title: 'Sci-Fi & Fantasy', content: sciFiFantasy },
    { id: 'dramas', title: 'Award-Winning Dramas', content: dramas },
];
