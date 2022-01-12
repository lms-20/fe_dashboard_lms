/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

/**
 * config without persist
 */
// export const store = configureStore({
//     reducer: {
//         userData: userReducer
//     }
// });

const reducers = combineReducers({
    userData: userReducer
});

const persistConfig = {
    key: 'userData',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});
const persistor = persistStore(store);

export { store, persistor };
