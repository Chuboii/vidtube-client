
const INITIAL_STATE = {
    videoData: null,
    recommendedVideo: null,
    recommendedError: null,
    subscriptionVideo: null,
    subsriptionError: null,
    channelVideo: null,
    channelError:null,
    isLoading: false,
    error: null
}

export const videoReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    
    switch (type) {
        case "GET_VIDEO_DATA":
            return {
                ...state,
                videoData: payload
            }
        case "GET_RECOMMENDED_VIDEO_DATA":
            return {
                ...state,
                recommendedVideo: payload
            }
        case "RECOMMENDED_ERROR":
                return {
                    ...state,
                    recommendedError: payload
            }
            case "GET_SUBSCRIPTION_VIDEO":
                return {
                    ...state,
                    subscriptionVideo: payload
            }
            case "SUBSCRIPTION_ERROR":
                return {
                    ...state,
                    subscriptionError: payload
            }
            case "GET_CHANNEL_VIDEO":
                return {
                    ...state,
                    channelVideo: payload
            }
        
            case "CHANNEL_ERROR":
                return {
                    ...state,
                    channelError: payload
            }
        
        case "VIDEO_LOADING":
            return {
                ...state,
                isLoading:payload
            }
        case "VIDEO_ERROR":
            return {
                ...state,
                error: payload
            }

        default:
            return state
    }
}