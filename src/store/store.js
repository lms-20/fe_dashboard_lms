/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { userReducer } from "./userSlice";
import { courseReducer } from "./courseSlice";

/**
 * config without persist
 */
// export const store = configureStore({
//     reducer: {
//         userData: userReducer
//     }
// });

const reducers = combineReducers({
    userData: userReducer,
    courseData: courseReducer
});

const persistConfig = {
    key: 'userData',
    storage,
    blacklist: ['courseData']
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
