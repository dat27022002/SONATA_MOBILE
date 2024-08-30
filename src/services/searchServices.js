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
    return res.data;
};

export const getSalesByDate = async (date) => {
    const data = {
        date: date,
    };

    const res = await getData('getSalesByDate', data);
    return res.data;
};

export const getSalesByMonth = async (year, month) => {
    const data = {
        year: year,
        month: month,
    };

    const res = await getData('getSalesByMonth', data);
    return res.data;
};

export const getSalesByRangeDate = async (dateStart, dateEnd, nameStore) => {
    const data = {
        daystart: dateStart,
        dayend: dateEnd,
        namestore: nameStore,
    };

    const res = await getData('getSaleByRangeDate', data);
    return res.data;
};
