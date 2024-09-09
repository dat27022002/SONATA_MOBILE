import { getSalesByRangeDateAndStore } from '../../services/searchServices';
import { getFormatedDate } from 'react-native-modern-datepicker';

export const calculateTodaySales = (listSale) => {
    // Get today's date without time
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0]; // Format YYYY-MM-DD

    //  Initialize totals
    let totalAmountToday = 0;
    let quantityToday = 0;

    // Calculate totals for today
    listSale.forEach((sale) => {
        const saleDate = sale.date.split('T')[0]; // Format YYYY-MM-DD
        if (saleDate === todayStr) {
            totalAmountToday += sale.totalAmout;
            quantityToday += 1; // Assuming each entry represents 1 sale
        }
    });

    return { revenue: totalAmountToday.toLocaleString('vi-VN'), quantity: quantityToday };
};

export const getSalesThisDay = async (storeCode) => {
    const today = new Date();
    const todayFormat = getFormatedDate(today, 'YYYY-MM-DD');

    const result = await getSalesByRangeDateAndStore(todayFormat, todayFormat, storeCode);

    const thisDaySales = { quantity: 0, revenue: 0 };

    thisDaySales.quantity = 0;
    thisDaySales.revenue = 0;

    if (result[0].Index == 0) return thisDaySales;

    const listSale = result.map((value) => ({
        totalAmount: value.합계금액,
    }));

    // Calculate totals for today
    listSale.forEach((sale) => {
        thisDaySales.revenue += sale.totalAmount;
        thisDaySales.quantity += 1;
    });

    thisDaySales.revenue = thisDaySales.revenue.toLocaleString('vi-VN');

    return thisDaySales;
};

export const getSalesThisMonth = async (storeCode) => {
    const currentDate = new Date();

    // Lấy thời gian đầu tháng (ngày 1 của tháng hiện tại)
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    // Lấy thời gian hiện tại
    const now = new Date();
    const result = await getSalesByRangeDateAndStore(startOfMonth, now, storeCode);

    const thisMonthSales = { quantity: 0, revenue: 0 };

    thisMonthSales.quantity = 0;
    thisMonthSales.revenue = 0;

    if (result[0].Index == 0) return thisMonthSales;

    const listSale = result.map((value) => ({
        totalAmount: value.합계금액,
    }));

    //console.log('dailySalesSummaryTemp', JSON.stringify(result, null, 2));

    listSale.forEach((item) => {
        thisMonthSales.revenue += item.totalAmount;
        thisMonthSales.quantity++;
    });

    thisMonthSales.revenue = thisMonthSales.revenue.toLocaleString('vi-VN');
    return thisMonthSales;
};
