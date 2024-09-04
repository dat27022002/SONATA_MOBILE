import { getSalesByRangeDate } from '../../../services/searchServices';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Hàm lấy ngày đầu tuần và cuối tuần
function getWeekRange() {
    const current = new Date();
    const firstDay = new Date(current.setDate(current.getDate() - current.getDay()));
    const lastDay = new Date();
    return [firstDay, lastDay];
}

function countWeekdaysInRange(startDate, endDate, targetDay) {
    // Chuyển đổi ngày vào đối tượng Date
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Kiểm tra xem ngày mục tiêu có hợp lệ không
    if (!weekDays.includes(targetDay)) {
        throw new Error('Invalid targetDay. Must be one of: ' + weekDays.join(', '));
    }

    // Lấy chỉ số của ngày mục tiêu
    const targetDayIndex = weekDays.indexOf(targetDay);

    // Đếm số ngày mục tiêu trong khoảng thời gian
    let count = 0;

    for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
        if (date.getDay() === targetDayIndex) {
            count++;
        }
    }

    return count;
}

export const getWeeklySales = async (dateStart, dateEnd) => {
    //console.log(dateStart, ':', dateEnd);

    const response = await getSalesByRangeDate(dateStart, dateEnd, 'HYOJUNG');

    //case there no revenue
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

    const summarySalesDaily = listSaleConvertEnglish.reduce((acc, curr) => {
        const date = curr.date.split('T')[0]; // Lấy ngày mà không lấy phần thời gian
        if (!acc[date]) {
            acc[date] = { date: date, Quantity: 0, 'Sales amount': 0 };
        }
        acc[date].Quantity += 1;
        acc[date]['Sales amount'] += curr.totalAmout;
        return acc;
    }, {});
    // console.log('summarySalesDaily: ', JSON.stringify(summarySalesDaily, null, 2));

    //group sale by week
    const SummarySalesWeekly = Object.values(summarySalesDaily).reduce((acc, sale) => {
        const date = new Date(sale.date);
        const dayOfWeek = weekDays[date.getDay()];

        if (!acc[dayOfWeek]) {
            acc[dayOfWeek] = {
                'Day of the week': dayOfWeek,
                'Business day': 0,
                Quantity: 0,
                'Sales amount': 0,
                Ratio: 0,
            };
        }
        acc[dayOfWeek].Quantity += sale.Quantity;
        acc[dayOfWeek]['Business day'] += 1;
        acc[dayOfWeek]['Sales amount'] += sale['Sales amount'];

        return acc;
    }, {});
    //console.log('SummarySalesWeekly: ', JSON.stringify(SummarySalesWeekly, null, 2));

    //convert object to array
    const SummarySalesWeeklyArr = Object.values(SummarySalesWeekly).map((item) => ({
        'Day of the week': item['Day of the week'],
        'Business day': item['Business day'],
        Quantity: item.Quantity,
        'Sales amount': item['Sales amount'],
        Ratio: item['Business day'] / countWeekdaysInRange(dateStart, dateEnd, item['Day of the week']),
    }));

    console.log('SummarySalesWeeklyArr: ', JSON.stringify(SummarySalesWeeklyArr, null, 2));

    // Sắp xếp theo thứ tự các thứ
    SummarySalesWeeklyArr.sort((a, b) => {
        return weekDays.indexOf(a['Day of the week']) - weekDays.indexOf(b['Day of the week']);
    });

    // Tính tổng Quantity và Sales amount
    const totalQuantity = SummarySalesWeeklyArr.reduce((acc, item) => acc + item.Quantity, 0);
    const totalSalesAmount = SummarySalesWeeklyArr.reduce((acc, item) => acc + item['Sales amount'], 0);
    const totalBusinessDay = SummarySalesWeeklyArr.reduce((acc, item) => acc + item['Business day'], 0);

    // Tính số ngày giữa hai ngày
    const diffInTime = new Date(dateEnd).getTime() - new Date(dateStart).getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));
    const summaryRatio = totalBusinessDay / diffInDays;

    // Tạo một đối tượng cho tổng
    const totalRow = {
        'Day of the week': 'Total Amount',
        'Business day': totalBusinessDay,
        Quantity: totalQuantity,
        'Sales amount': totalSalesAmount,
        Ratio: summaryRatio,
    };

    // Thêm hàng tổng vào đầu mảng
    SummarySalesWeeklyArr.unshift(totalRow);

    //console.log('SummarySalesWeeklyArr: ', JSON.stringify(SummarySalesWeeklyArr, null, 2));

    const formatedSummarySalesWeeklyArr = SummarySalesWeeklyArr.map((item) => ({
        'Day of the week': item['Day of the week'],
        'Business day': item['Business day'],
        Quantity: item['Quantity'],
        'Sales amount': item['Sales amount'].toLocaleString('vi-VN'),
        Ratio: Math.ceil(item['Ratio'] * 100) + '%',
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
