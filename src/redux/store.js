import { combineReducers, configureStore} from '@reduxjs/toolkit'
import { taskReduser} from './taskSlice';
import { filtersReduser } from './filterSlice';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['tasks']
}

const rootReducer = combineReducers({
    tasks: taskReduser,
    filters: filtersReduser 
})

const persistedReducer = persistReducer(persistConfig ,rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }})
    })

export const persistor = persistStore(store)