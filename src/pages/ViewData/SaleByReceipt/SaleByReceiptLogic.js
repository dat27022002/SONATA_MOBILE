import { getSalesByRangeDate } from '../../../services/searchServices';
import { salesRangeDates } from '../DataFake';
import { calculateTodaySales } from '../ViewDataLogic';

export const getSalesByReceipt = async (dateStart, dateEnd, store) => {
    //console.log(dateStart, ':', dateEnd);

    const response = await getSalesByRangeDate(dateStart, dateEnd, 'HYOJUNG');
    //const response = salesRangeDates;

    //case there no revenue
    if (response[0].Index == 0)
        return {
            dataTable: [],
            dataChart: [],
            thisWeekSales: { revenue: 0, quantity: 0 },
        };
    //console.log('getSalesByRangeDate: ', JSON.stringify(response.slice(0, 4), null, 2));

    const listSaleConvertEnglish = response.map((value) => ({
        date: value.수정일,
        totalAmout: value.합계금액,
        billNumber: value.전표번호,
    }));
    //console.log('getSalesByRangeDate: ', JSON.stringify(listSaleConvertEnglish.slice(0, 20), null, 2));

    const resultTemp = listSaleConvertEnglish.reverse().map((item) => ({
        Receipt: item['billNumber'],
        'Payment date': item['date'],
        'Sales amount': item['totalAmout'],
    }));
    //console.log('resultTemp: ', JSON.stringify(resultTemp.slice(0, 20), null, 2));

    // // Tính tổng Sales amount
    const totalSalesAmount = resultTemp.reduce((acc, item) => acc + item['Sales amount'], 0);

    // // Tạo một đối tượng cho tổng
    const totalRow = {
        Receipt: 'Total amount',
        'Payment date': '',
        'Sales amount': totalSalesAmount,
    };

    // Thêm hàng tổng vào đầu mảng
    resultTemp.unshift(totalRow);
    //console.log('resultTemp: ', JSON.stringify(resultTemp.slice(0, 20), null, 2));

    const formatedResultTemp = resultTemp.map((item) => ({
        Receipt: item['Receipt'],
        'Payment date': item['Payment date'].replace('T', ' '),
        'Sales amount': item['Sales amount'].toLocaleString('vi-VN'),
    }));
    console.log('formatedResultTemp: ', JSON.stringify(formatedResultTemp, null, 2));

    const result = {
        dataTable: formatedResultTemp,
        thisDaySales: calculateTodaySales(listSaleConvertEnglish),
    };

    console.log('result: ', JSON.stringify(result, null, 2));

    return result;
};
