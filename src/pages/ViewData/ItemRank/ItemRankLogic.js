import { getSalesByItemAndRangeDate } from '../../../services/searchServices';
import { salesByItemAndRangeDates } from '../DataFake';

export const getItemRank = async (dateStart, dateEnd, store) => {
    //console.log(dateStart, ':', dateEnd);

    const response = await getSalesByItemAndRangeDate(dateStart, dateEnd, store);
    //const response = salesByItemAndRangeDates;

    //case there no revenue
    if (response[0].Index == 0)
        return {
            dataTable: [],
            dataChart: [],
            thisWeekSales: { revenue: 0, quantity: 0 },
        };
    //console.log('getSalesByRangeDate: ', JSON.stringify(response.slice(0, 4), null, 2));

    const listSaleConvertEnglish = response.map((value) => ({
        productName: value.품명,
        quantity: value.매출수량,
        salesAmount: value.매출금액,
    }));
    //console.log('listSaleConvertEnglish: ', JSON.stringify(listSaleConvertEnglish.slice(0, 20), null, 2));

    const resultTemp = listSaleConvertEnglish.map((item) => ({
        Item: item['productName'],
        Quantity: item['quantity'],
        'Sales amount': item['salesAmount'],
    }));
    //console.log('resultTemp: ', JSON.stringify(resultTemp.slice(0, 20), null, 2));

    //sắp xếp theo số lượng
    resultTemp.sort((a, b) => b.Quantity - a.Quantity);
    //console.log('resultTemp: ', JSON.stringify(resultTemp.slice(0, 20), null, 2));

    // Tính tổng Sales amount và quantity
    const totalSalesAmount = resultTemp.reduce((acc, item) => acc + item['Sales amount'], 0);
    const totalQuantity = resultTemp.reduce((acc, item) => acc + item['Quantity'], 0);

    //thêm cột rank và Share
    const resultTemp2 = resultTemp.map((item, index, array) => {
        // Xếp hạng, xử lý số lượng giống nhau
        const rank = array.findIndex((obj) => obj.Quantity === item.Quantity) + 1;

        return {
            Rank: rank,
            Item: item.Item,
            Quantity: item.Quantity,
            'Sales amount': item['Sales amount'],
            Share: `${((item.Quantity / totalQuantity) * 100).toFixed(2)}%`,
        };
    });
    console.log('resultTemp2: ', JSON.stringify(resultTemp2.slice(0, 20), null, 2));

    // Tạo một đối tượng cho tổng
    const totalRow = {
        Rank: '',
        Item: 'Total Amount',
        Quantity: totalQuantity,
        'Sales amount': totalSalesAmount,
        Share: '100%',
    };

    // Thêm hàng tổng vào đầu mảng
    resultTemp2.unshift(totalRow);
    //console.log('resultTempHaveTotalRow: ', JSON.stringify(resultTemp.slice(0, 20), null, 2));

    const formatedResultTemp = resultTemp2.map((item) => ({
        Rank: item['Rank'],
        Item: item['Item'],
        Quantity: item['Quantity'],
        'Sales amount': item['Sales amount'].toLocaleString('vi-VN'),
        Share: item['Share'],
    }));
    //console.log('formatedResultTemp: ', JSON.stringify(formatedResultTemp, null, 2));

    resultTemp2.shift();

    const result = {
        dataTable: formatedResultTemp,
        dataChart: resultTemp2,
    };
    console.log('result: ', JSON.stringify(result, null, 2));

    return result;
};
