import { getSalesByRangeDateAndStore } from '../../../services/searchServices';
import { salesRangeDates } from '../DataFake';
import { getSalesThisDay } from '../ViewDataLogic';

const listTime = [
    '09:00 ~ 09:59',
    '10:00 ~ 10:59',
    '11:00 ~ 11:59',
    '12:00 ~ 12:59',
    '15:00 ~ 15:59',
    '16:00 ~ 16:59',
    '17:00 ~ 17:59',
    '18:00 ~ 18:59',
];

// Define a mock function to map dates to time periods. Here you need to replace this logic with actual mapping
function getTimePeriod(date) {
    const hours = new Date(date).getHours();
    if (hours >= 9 && hours < 10) return '09:00 ~ 09:59';
    if (hours >= 10 && hours < 11) return '10:00 ~ 10:59';
    if (hours >= 11 && hours < 12) return '11:00 ~ 11:59';
    if (hours >= 12 && hours < 13) return '12:00 ~ 12:59';
    if (hours >= 15 && hours < 16) return '15:00 ~ 15:59';
    if (hours >= 16 && hours < 17) return '16:00 ~ 16:59';
    if (hours >= 17 && hours < 18) return '17:00 ~ 17:59';
    if (hours >= 18 && hours < 19) return '18:00 ~ 18:59';
    return 'Unknown';
}

export const getTimeBaseSales = async (dateStart, dateEnd, storeCode) => {
    //console.log(dateStart, ':', dateEnd);

    const [response, thisDaySales] = await Promise.all([
        getSalesByRangeDateAndStore(dateStart, dateEnd, storeCode),
        getSalesThisDay(storeCode),
    ]);
    //const response = salesRangeDates;

    //case there no revenue
    if (response[0].Index == 0)
        return {
            dataTable: [],
            dataChart: [],
            thisWeekSales: thisDaySales,
        };
    //console.log('getSalesByRangeDate: ', JSON.stringify(response.slice(0, 4), null, 2));

    const listSaleConvertEnglish = response.map((value) => ({
        date: value.수정일,
        totalAmout: value.합계금액,
    }));
    console.log('getSalesByRangeDate: ', JSON.stringify(listSaleConvertEnglish.slice(0, 20), null, 2));

    const resultTemp = listTime.map((time) => ({
        Time: time,
        Quantity: 0,
        'Unit Price': 0,
        'Sales amount': 0,
    }));

    // Calculate totals
    listSaleConvertEnglish.forEach((sale) => {
        const timePeriod = getTimePeriod(sale.date);
        const index = resultTemp.findIndex((item) => item.Time === timePeriod);
        if (index !== -1) {
            resultTemp[index].Quantity += 1;
            resultTemp[index]['Sales amount'] += sale.totalAmout;
        }
    });
    //console.log('resultTemp: ', JSON.stringify(resultTemp.slice(0, 20), null, 2));

    // Calculate unit price
    resultTemp.forEach((item) => {
        if (item.Quantity > 0) {
            item['Unit Price'] = Math.ceil(item['Sales amount'] / item.Quantity);
        }
    });
    //console.log('resultTemp: ', JSON.stringify(resultTemp.slice(0, 20), null, 2));

    // Tính tổng Quantity và Sales amount
    const totalQuantity = resultTemp.reduce((acc, item) => acc + item.Quantity, 0);
    const totalSalesAmount = resultTemp.reduce((acc, item) => acc + item['Sales amount'], 0);
    const unitPriceAverage = Math.ceil(totalSalesAmount / totalQuantity);

    // Tạo một đối tượng cho tổng
    const totalRow = {
        Time: 'Total Amount',
        Quantity: totalQuantity,
        'Unit Price': unitPriceAverage,
        'Sales amount': totalSalesAmount,
    };

    // Thêm hàng tổng vào đầu mảng
    resultTemp.unshift(totalRow);
    //console.log('resultTemp: ', JSON.stringify(resultTemp, null, 2));

    const formatedResultTemp = resultTemp.map((item) => ({
        Time: item['Time'],
        Quantity: item['Quantity'],
        'Unit Price': item['Unit Price'].toLocaleString('vi-VN'),
        'Sales amount': item['Sales amount'].toLocaleString('vi-VN'),
    }));
    //console.log('formatedResultTemp: ', JSON.stringify(formatedResultTemp, null, 2));
    resultTemp.shift(); //remove row total to draw chart

    const result = {
        dataTable: formatedResultTemp,
        dataChart: resultTemp,
        thisDaySales: thisDaySales,
    };

    //console.log('result: ', JSON.stringify(result, null, 2));

    return result;
};
