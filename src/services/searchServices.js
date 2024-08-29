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
    const res = await httpRequest.post('', formData, { headers: { fun_c: action } });
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
