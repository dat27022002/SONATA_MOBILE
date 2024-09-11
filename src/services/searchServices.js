import httpRequest from '../utils/httpRequest';

const getData = async (action, data) => {
    const formData = {
        userCode: '',
        userType: '',
        data: {
            ...data,
            next: '1',
            to: '1000',
        },
    };
    // console.log('request: ', JSON.stringify(formData, null, 2));
    // console.log(
    //     'start Time: ',
    //     new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    // );
    const res = await httpRequest.post('', formData, { headers: { fun_c: action } });
    // console.log(
    //     'end Time: ',
    //     new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    // );
    // console.log('formData: ', JSON.stringify(formData.slice(0, 4), null, 2));
    // console.log('action: ', action);
    return res.data;
};

export const getSalesByRangeDateAndStore = async (dateStart, dateEnd, storeCode) => {
    const data = {
        daystart: dateStart,
        dayend: dateEnd,
        notStore: storeCode === 'All' ? '1' : '0',
        storeCode: storeCode,
    };

    const res = await getData('getSalesByRangeDateAndStore', data);
    return res.data;
};

export const getSalesByItemAndRangeDate = async (dateStart, dateEnd, storeCode) => {
    const data = {
        daystart: dateStart,
        dayend: dateEnd,
        notStore: storeCode === 'All' ? '1' : '0',
        storeCode: storeCode,
    };

    const res = await getData('getSalesByItem', data);
    return res.data;
};

export const getBillCanncel = async (dateStart, dateEnd, storeCode) => {
    const data = {
        daystart: dateStart,
        dayend: dateEnd,
        notStore: storeCode === 'All' ? '1' : '0',
        storeCode: storeCode,
    };

    const res = await getData('getBillCancel', data);
    return res.data;
};

export const getStores = async () => {
    const formData = {
        userCode: '',
        userType: '',
        data: {},
    };

    const res = await httpRequest.post('', formData, { headers: { fun_c: 'getStores' } });
    return res.data.data;
};

export const getPOSs = async () => {
    const formData = {
        userCode: '',
        userType: '',
        data: {},
    };

    const res = await httpRequest.post('', formData, { headers: { fun_c: 'getPOSs' } });
    return res.data.data;
};
