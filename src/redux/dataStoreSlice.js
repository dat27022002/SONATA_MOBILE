import { createSlice } from '@reduxjs/toolkit';
const dataStoreSlice = createSlice({
    name: 'dataStore',
    initialState: {
        stores: [{ storeCode: 'All', storeName: 'All' }],
    },
    reducers: {
        updateStores: (state, action) => {
            state.stores = [...state.stores, ...action.payload];
        },
    },
});

export const { updateStores } = dataStoreSlice.actions;

export default dataStoreSlice.reducer;
