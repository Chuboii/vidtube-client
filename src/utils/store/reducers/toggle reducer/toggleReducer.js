const INITIAL_STATE = {
    toggleMobileMenu: false,
    navToggled: false,
    toggleNoti: false,
    disableBg: false,
    toggleVideo: false,
    toggleCommentForm: false,
    toggleCommentComp:false
}



export const toggleReducer = (state = INITIAL_STATE, action) =>{
    const { type, payload } = action
    
    switch (type) {
        case "TOGGLE_MOBILE_MENU":
            return {
                ...state,
                toggleMobileMenu: payload
            }
        case "TOGGLE_NAVBAR":
            return {
                ...state,
                 navToggled: payload
            }
        case "TOGGLE_NOTIFICAION":
            return {
                ...state, 
                toggleNoti: payload
            }
        case "DISABLE_BG":
                return {
                    ...state, 
                    disableBg: payload
            }
        case "TOGGLE_COMMENT_FORM":
            return {
                ...state,
                toggleCommentForm: payload
            }
        case "TOGGLE_COMMENT_COMP":
            return {
                ...state,
                toggleCommentComp:payload
            }
        case "TOGGLE_VIDEO_COMP":
                return {
                    ...state, 
                    toggleVideo: payload
                }
        default:
            return state
    }
}