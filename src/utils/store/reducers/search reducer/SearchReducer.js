
const INITIAL_STATE = {
    searchData: null,
    searchValue:'',
    isLoading: false,
    error: null,
}

export const searchReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    
    switch (type) {
        case 'GET_SEARCH_DATA':
            return {
                ...state,
                searchData: payload
            }
        case 'GET_SEARCH_VALUE':
            return {
                ...state,
                searchValue:payload
            }
        case 'SEARCH_LOADING':
            return {
                ...state,
                isLoading: payload
            }
        case 'SEARCH_ERROR':
            return {
                ...state,
                error: payload
            }
        default:
            return state
    }
}