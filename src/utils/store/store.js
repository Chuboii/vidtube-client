import { createStore, compose, applyMiddleware } from 'redux'

import { logger } from 'redux-logger'

import { rootReducers } from './root-reducers'

import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["toggle", "search", "video"]
}



const persistedReducer = persistReducer(persistConfig, rootReducers)

const middleware = [logger]

const composedEnhancers = compose(applyMiddleware(...middleware))

export const store = createStore(persistedReducer)

export const persistor = persistStore(store)