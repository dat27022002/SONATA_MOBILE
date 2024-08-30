import { getSalesByRangeDate } from '../../../services/searchServices';

// Hàm lấy ngày đầu tuần và cuối tuần
function getWeekRange() {
    const current = new Date();
    const firstDay = new Date(current.setDate(current.getDate() - current.getDay()));
    const lastDay = new Date();
    return [firstDay, lastDay];
}

export const getWeeklySales = async (dateStart, dateEnd) => {
    //console.log(dateStart, ':', dateEnd);

    const response = await getSalesByRangeDate(dateStart, dateEnd, 'HYOJUNG');

    if (response[0].Index == 0)
        return {
            dataTable: [],
            dataChart: [],
            thisWeekSales: { revenue: 0, quantity: 0 },
        };
    //console.log('getSalesByRangeDate: ', JSON.stringify(response.slice(0, 4), null, 2));
    const listSaleConvertEnglish = response.map((value) => ({
        date: value.일자,
        totalAmout: value.합계금액,
    }));

    //console.log('getSalesByRangeDate: ', JSON.stringify(listSaleConvertEnglish.slice(0, 4), null, 2));

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const SummarySalesWeekly = listSaleConvertEnglish.reduce((acc, sale) => {
        const date = new Date(sale.date);
        const dayOfWeek = weekDays[date.getDay()];

        if (!acc[dayOfWeek]) {
            acc[dayOfWeek] = {
                'Day of the week': dayOfWeek,
                'Business day': 1,
                Quantity: 0,
                'Sales amount': 0,
                Ratio: 0,
            };
        }
        acc[dayOfWeek].Quantity += 1;
        acc[dayOfWeek]['Sales amount'] += sale.totalAmout;

        return acc;
    }, {});

    //console.log('SummarySalesWeekly: ', JSON.stringify(SummarySalesWeekly, null, 2));
    //convert object to array
    const SummarySalesWeeklyArr = Object.values(SummarySalesWeekly).map((item) => ({
        'Day of the week': item['Day of the week'],
        'Business day': 1,
        Quantity: item.Quantity,
        'Sales amount': item['Sales amount'],
        Ratio: 0,
    }));

    // console.log('SummarySalesWeeklyArr: ', JSON.stringify(SummarySalesWeeklyArr, null, 2));

    // Sắp xếp theo thứ tự các thứ
    SummarySalesWeeklyArr.sort((a, b) => {
        return weekDays.indexOf(a['Day of the week']) - weekDays.indexOf(b['Day of the week']);
    });

    // Tính tổng Quantity và Sales amount
    const totalQuantity = SummarySalesWeeklyArr.reduce((acc, item) => acc + item.Quantity, 0);
    const totalSalesAmount = SummarySalesWeeklyArr.reduce((acc, item) => acc + item['Sales amount'], 0);

    // Tạo một đối tượng cho tổng
    const totalRow = {
        'Day of the week': 'Total Amount',
        'Business day': 1,
        Quantity: totalQuantity,
        'Sales amount': totalSalesAmount,
        Ratio: 0,
    };

    // Thêm hàng tổng vào đầu mảng
    SummarySalesWeeklyArr.unshift(totalRow);

    //console.log('SummarySalesWeeklyArr: ', JSON.stringify(SummarySalesWeeklyArr, null, 2));

    const formatedSummarySalesWeeklyArr = SummarySalesWeeklyArr.map((item) => ({
        'Day of the week': item['Day of the week'],
        'Business day': 1,
        Quantity: item.Quantity,
        'Sales amount': item['Sales amount'].toLocaleString('vi-VN'),
        Ratio: 0,
    }));

    SummarySalesWeeklyArr.shift(); //remove row total to draw chart

    //tính toán tổng doanh thu cho tuần hiện tại

    // Lọc dữ liệu theo tuần hiện tại
    const currentWeekRange = getWeekRange();
    const currentWeekSales = listSaleConvertEnglish.filter((sale) => {
        const saleDate = new Date(sale.date);
        return saleDate >= currentWeekRange[0] && saleDate <= currentWeekRange[1];
    });

    //console.log('currentWeekSales: ', JSON.stringify(currentWeekSales, null, 2));

    // Tính tổng Quantity và Sales amount cho tuần hiện tại
    const totalQuantityThisWeek = currentWeekSales.reduce((acc, item) => acc + 1, 0);
    const totalSalesAmountThisWeek = currentWeekSales.reduce((acc, item) => acc + item.totalAmout, 0);

    const result = {
        dataTable: formatedSummarySalesWeeklyArr,
        dataChart: SummarySalesWeeklyArr,
        thisWeekSales: { revenue: totalSalesAmountThisWeek.toLocaleString('vi-VN'), quantity: totalQuantityThisWeek },
    };

    //console.log('result: ', JSON.stringify(result, null, 2));

    return result;
};
