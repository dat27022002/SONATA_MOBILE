import { createSlice } from '@reduxjs/toolkit';
const dataStoreSlice = createSlice({
    name: 'dataStore',
    initialState: {
        stores: [{ storeCode: 'All', storeName: 'All' }],
        POSs: [{ posName: 'All' }],
    },
    reducers: {
        updateStores: (state, action) => {
            state.stores = [{ storeCode: 'All', storeName: 'All' }, ...action.payload];
        },
        updatePOSs: (state, action) => {
            state.POSs = [{ posName: 'All' }, ...action.payload];
        },
    },
});

export const { updateStores, updatePOSs } = dataStoreSlice.actions;

export default dataStoreSlice.reducer;
