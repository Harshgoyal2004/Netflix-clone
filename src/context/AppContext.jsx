import { createContext, useContext, useReducer, useCallback } from 'react';

// ========================================
// Initial State
// ========================================
const initialState = {
    // User data
    user: {
        name: 'User',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80',
        profile: 'default',
    },

    // My List
    myList: [],

    // Search
    searchQuery: '',
    searchActive: false,

    // Modal
    modalOpen: false,
    modalContent: null,

    // UI State
    isScrolled: false,
    isMuted: true,
};

// ========================================
// Action Types
// ========================================
const ActionTypes = {
    // My List
    ADD_TO_LIST: 'ADD_TO_LIST',
    REMOVE_FROM_LIST: 'REMOVE_FROM_LIST',

    // Search
    SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
    SET_SEARCH_ACTIVE: 'SET_SEARCH_ACTIVE',
    CLEAR_SEARCH: 'CLEAR_SEARCH',

    // Modal
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',

    // UI State
    SET_SCROLLED: 'SET_SCROLLED',
    TOGGLE_MUTE: 'TOGGLE_MUTE',
};

// ========================================
// Reducer
// ========================================
const appReducer = (state, action) => {
    switch (action.type) {
        // My List Actions
        case ActionTypes.ADD_TO_LIST:
            if (state.myList.some(item => item.id === action.payload.id)) {
                return state;
            }
            return {
                ...state,
                myList: [...state.myList, action.payload],
            };

        case ActionTypes.REMOVE_FROM_LIST:
            return {
                ...state,
                myList: state.myList.filter(item => item.id !== action.payload),
            };

        // Search Actions
        case ActionTypes.SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload,
            };

        case ActionTypes.SET_SEARCH_ACTIVE:
            return {
                ...state,
                searchActive: action.payload,
            };

        case ActionTypes.CLEAR_SEARCH:
            return {
                ...state,
                searchQuery: '',
                searchActive: false,
            };

        // Modal Actions
        case ActionTypes.OPEN_MODAL:
            return {
                ...state,
                modalOpen: true,
                modalContent: action.payload,
            };

        case ActionTypes.CLOSE_MODAL:
            return {
                ...state,
                modalOpen: false,
                modalContent: null,
            };

        // UI State Actions
        case ActionTypes.SET_SCROLLED:
            return {
                ...state,
                isScrolled: action.payload,
            };

        case ActionTypes.TOGGLE_MUTE:
            return {
                ...state,
                isMuted: !state.isMuted,
            };

        default:
            return state;
    }
};

// ========================================
// Context
// ========================================
const AppContext = createContext(null);

// ========================================
// Provider Component
// ========================================
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    // My List Actions
    const addToList = useCallback((item) => {
        dispatch({ type: ActionTypes.ADD_TO_LIST, payload: item });
    }, []);

    const removeFromList = useCallback((id) => {
        dispatch({ type: ActionTypes.REMOVE_FROM_LIST, payload: id });
    }, []);

    const isInList = useCallback((id) => {
        return state.myList.some(item => item.id === id);
    }, [state.myList]);

    // Search Actions
    const setSearchQuery = useCallback((query) => {
        dispatch({ type: ActionTypes.SET_SEARCH_QUERY, payload: query });
    }, []);

    const setSearchActive = useCallback((active) => {
        dispatch({ type: ActionTypes.SET_SEARCH_ACTIVE, payload: active });
    }, []);

    const clearSearch = useCallback(() => {
        dispatch({ type: ActionTypes.CLEAR_SEARCH });
    }, []);

    // Modal Actions
    const openModal = useCallback((content) => {
        dispatch({ type: ActionTypes.OPEN_MODAL, payload: content });
    }, []);

    const closeModal = useCallback(() => {
        dispatch({ type: ActionTypes.CLOSE_MODAL });
    }, []);

    // UI State Actions
    const setScrolled = useCallback((scrolled) => {
        dispatch({ type: ActionTypes.SET_SCROLLED, payload: scrolled });
    }, []);

    const toggleMute = useCallback(() => {
        dispatch({ type: ActionTypes.TOGGLE_MUTE });
    }, []);

    const value = {
        // State
        ...state,

        // My List Actions
        addToList,
        removeFromList,
        isInList,

        // Search Actions
        setSearchQuery,
        setSearchActive,
        clearSearch,

        // Modal Actions
        openModal,
        closeModal,

        // UI Actions
        setScrolled,
        toggleMute,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

// ========================================
// Custom Hook
// ========================================
export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};

export default AppContext;
