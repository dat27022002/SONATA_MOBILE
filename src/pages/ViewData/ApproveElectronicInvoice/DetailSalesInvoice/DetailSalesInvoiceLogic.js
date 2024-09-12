import { getSalesItemByStoreCodeAndBillNo } from '../../../../services/searchServices';
import i18n from '../../../../utils/i18next';

export const getSalesItem = async (storeCode, billNo) => {
    //console.log(storeCode, ':', billNo);

    // const [response, thisDaySales] = await Promise.all([
    //     getSalesByRangeDateAndStore(dateStart, dateEnd, storeCode),
    //     getSalesThisDay(storeCode),
    // ]);

    const response = await getSalesItemByStoreCodeAndBillNo(String(storeCode), String(billNo));
    //case there no revenue
    if (response[0]?.Index == 0) return [];
    //console.log('response: ', JSON.stringify(response, null, 2));

    const listSaleConvertEnglish = response.map((value) => ({
        itemName: value.품명,
        quantity: value.매출수량,
        price: value.매출합계,
    }));
    //console.log('listSaleConvertEnglish: ', JSON.stringify(listSaleConvertEnglish, null, 2));

    // Tính tổng Quantity và Sales amount
    const totalSalesAmount = listSaleConvertEnglish.reduce((acc, item) => acc + item.price, 0);
    const totalQuantity = listSaleConvertEnglish.reduce((acc, item) => acc + item.quantity, 0);

    const result = [...listSaleConvertEnglish, { itemName: 'Total', quantity: totalQuantity, price: totalSalesAmount }];

    const formatedResult = result.map((value) => ({
        itemName: value.itemName,
        quantity: value.quantity,
        price: value.price.toLocaleString('vi-VN'),
    }));
    //console.log('formatedResult: ', JSON.stringify(formatedResult, null, 2));

    // add row header
    const finalResult = [
        { item: i18n.t('ViewData.Item'), quantity: i18n.t('ViewData.Quantity'), price: i18n.t('ViewData.SalesAmount') },
        ...formatedResult,
    ];

    // //console.log('result: ', JSON.stringify(result, null, 2));

    return finalResult;
};

export const getFilterPayment = (data) => {
    const payment = [
        { type: i18n.t('Home.Cash'), price: data.cash },
        { type: i18n.t('Home.CashReceipts'), price: data.cashReceipt },
        { type: i18n.t('Home.CreditCard'), price: data.creditCard },
        { type: i18n.t('Home.OtherPayment'), price: data.otherPayment },
        { type: i18n.t('Home.TotalAmount'), price: data.totalAmount },
    ];

    const filterPayment = payment.filter((value) => value.price > 0);

    const formatedPayment = filterPayment.map((value) => ({
        type: value.type,
        price: value.price.toLocaleString('vi-VN'),
    }));
    return formatedPayment;
};
