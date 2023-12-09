const INITIAL_STATE = {
    previewComment: null,
    allComments:null,
    isLoading: false,
    error: null
}

export const commentReducer = (state= INITIAL_STATE, action) => {
    const { type, payload } = action

    switch (type) {
        case "GET_COMMENT_PREVIEW":
            return {
                ...state,
                previewComment: payload
            }
        case "GET_ALL_COMMENT":
            return {
                ...state,
                allComments: payload
            }
        case "COMMENT_LOADING":
            return {
                ...state,
                isLoading: payload
            }
        case "COMMENT_ERROR":
            return {
                ...state,
                error:payload
            }
        default:
            return state
    }
}