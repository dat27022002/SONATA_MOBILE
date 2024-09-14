import { createSlice } from '@reduxjs/toolkit';
const dataStoreSlice = createSlice({
    name: 'dataStore',
    initialState: {
        stores: [],
        POSs: [{ posName: 'All' }],
        inforUser: {},
    },
    reducers: {
        updateStores: (state, action) => {
            const stores = action.payload.filter((value) => value.storeCode == state.inforUser.storeCode);
            if (state.inforUser.isCEO == true) {
                state.stores = [{ storeCode: 'All', storeName: 'All' }, ...action.payload];
            } else {
                state.stores = stores;
            }
        },
        updatePOSs: (state, action) => {
            state.POSs = [{ posName: 'All' }, ...action.payload];
        },
        updateInforUser: (state, action) => {
            state.inforUser = action.payload;
        },
    },
});

export const { updateStores, updatePOSs, updateInforUser } = dataStoreSlice.actions;

export default dataStoreSlice.reducer;
