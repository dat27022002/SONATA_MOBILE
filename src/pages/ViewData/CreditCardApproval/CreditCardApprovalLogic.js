import { getSalesByRangeDate } from '../../../services/searchServices';
import { salesRangeDates } from '../DataFake';
import { calculateTodaySales } from '../ViewDataLogic';

export const getCreditCardApproval = async (dateStart, dateEnd, store) => {
    //console.log(dateStart, ':', dateEnd);

    const response = await getSalesByRangeDate(dateStart, dateEnd, 'HYOJUNG');
    //const response = salesRangeDates;

    //case there no revenue
    if (response[0].Index == 0)
        return {
            dataTable: [],
            dataChart: [],
            thisDaySales: { revenue: 0, quantity: 0 },
        };
    //console.log('getSalesByRangeDate: ', JSON.stringify(response.slice(0, 4), null, 2));

    const listSaleConvertEnglish = response.map((value) => ({
        date: value.일자,
        totalAmout: value.합계금액,
    }));
    //console.log('getSalesByRangeDate: ', JSON.stringify(listSaleConvertEnglish.slice(0, 4), null, 2));

    const summarySalesDaily = listSaleConvertEnglish.reduce((acc, curr) => {
        const date = curr.date.split('T')[0]; // Lấy ngày mà không lấy phần thời gian
        if (!acc[date]) {
            acc[date] = { Date: date, Quantity: 0, Guest: 0, 'Customer price': 0, 'Sales amount': 0 };
        }
        acc[date]['Quantity'] += 1;
        acc[date]['Guest'] += 1;
        acc[date]['Sales amount'] += curr.totalAmout;
        return acc;
    }, {});
    // console.log('summarySalesDaily: ', JSON.stringify(summarySalesDaily, null, 2));

    //convert object to array
    const summarySalesDailyArr = Object.values(summarySalesDaily).map((item) => ({
        Date: item['Date'],
        Quantity: item['Quantity'],
        Guest: item['Guest'],
        'Customer price': 0,
        'Sales amount': item['Sales amount'],
    }));
    //console.log('summarySalesDailyArr: ', JSON.stringify(summarySalesDailyArr, null, 2));

    // Sắp xếp theo thứ tự các thứ
    summarySalesDailyArr.sort((a, b) => new Date(a.Date) - new Date(b.Date));
    //console.log('summarySalesDailyArr: ', JSON.stringify(summarySalesDailyArr, null, 2));

    // Tính tổng Quantity và Sales amount
    const totalQuantity = summarySalesDailyArr.reduce((acc, item) => acc + item.Quantity, 0);
    const totalSalesAmount = summarySalesDailyArr.reduce((acc, item) => acc + item['Sales amount'], 0);

    // Tạo một đối tượng cho tổng
    const totalRow = {
        Date: 'Total Amount',
        Quantity: totalQuantity,
        Guest: totalQuantity,
        'Customer price': 0,
        'Sales amount': totalSalesAmount,
    };

    // Thêm hàng tổng vào đầu mảng
    summarySalesDailyArr.unshift(totalRow);
    //console.log('summarySalesDailyArr: ', JSON.stringify(summarySalesDailyArr, null, 2));

    const formatedSummaryDaysWeeklyArr = summarySalesDailyArr.map((item) => ({
        Date: item['Date'],
        Quantity: item['Quantity'],
        Guest: item['Guest'],
        'Customer price': 0,
        'Sales amount': item['Sales amount'].toLocaleString('vi-VN'),
    }));

    summarySalesDailyArr.shift(); //remove row total to draw chart

    // //tính toán tổng doanh thu cho tuần hiện tại

    const result = {
        dataTable: formatedSummaryDaysWeeklyArr,
        dataChart: summarySalesDailyArr,
        thisDaySales: calculateTodaySales(listSaleConvertEnglish),
    };

    console.log('result: ', JSON.stringify(result, null, 2));

    return result;
};
