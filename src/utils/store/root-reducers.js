import { combineReducers } from "redux";

import { userReducer } from "./reducers/user reducer/userReducer";
import { toggleReducer } from "./reducers/toggle reducer/toggleReducer";
import { videoReducer } from "./reducers/video reducer/videoReducer";
import { searchReducer } from "./reducers/search reducer/SearchReducer";
import { commentReducer } from "./reducers/comment reducer/CommentReducer";
import { notificationReducer } from "./reducers/notification reducer/notificationReducer";

export const rootReducers = combineReducers({
    user: userReducer,
    toggle: toggleReducer,
    video: videoReducer,
    search: searchReducer,
    comment: commentReducer,
    notify: notificationReducer
})
