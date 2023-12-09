const INITIAL_STATE = {
    notification: null,
    isLoading: false,
    error: null
}

export const notificationReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    
    switch (type) {
        case 'GET_NOTIFICATION':
            return {
                ...state,
                notification:payload
            }
            case 'NOTIFICATION_LOADING':
                return {
                    ...state,
                    isLoading:payload
            }
            case 'NOTIFICATION_ERROR':
                return {
                    ...state,
                    error:payload
            }
        default:
            return state
    }
}