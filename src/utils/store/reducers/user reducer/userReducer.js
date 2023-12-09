const INITIAL_STATE = {
    currentUser: null,
    otherUser: null,
    loading: false,
    error: null
}

export const userReducer = (state = INITIAL_STATE, action) =>{
    const { type, payload } = action
    
    switch (type) {
        case "GET_USER_DATA":
            return {
                ...state,
                currentUser: payload
            }
        case "OTHER_USER_DATA":
            return {
                ...state,
                otherUser: payload
            }
        case "USER_LOADING":
            return {
                ...state,
                loading: payload
            }
        case "USER_ERROR":
            return {
                ...state, 
                error: payload
            }
        default:
            return state
    }
}

console.log(INITIAL_STATE.currentUser)