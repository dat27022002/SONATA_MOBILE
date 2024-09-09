import { configureStore } from '@reduxjs/toolkit';

import dataStoreReducer from './dataStoreSlice';
const store = configureStore({
    reducer: { dataStore: dataStoreReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
