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

const calculateTotalSales = (sales) => {
    const result = { quantity: 0, revenue: 0 };

    if (sales[0].Index == 0) return result;

    const listSale = sales.map((value) => ({
        totalAmount: value.합계금액,
    }));

    // Calculate totals for today
    listSale.forEach((sale) => {
        result.revenue += sale.totalAmount;
        result.quantity += 1;
    });

    result.revenue = result.revenue.toLocaleString('vi-VN');

    return result;
};

export const getSalesThisDay = async (storeCode) => {
    const today = new Date();
    const todayFormat = getFormatedDate(today, 'YYYY-MM-DD');

    const result = await getSalesByRangeDateAndStore(todayFormat, todayFormat, storeCode);

    return calculateTotalSales(result);
};

export const getSalesThisWeek = async (storeCode) => {
    const today = new Date();

    const today2 = new Date();
    const firstDateWeek = new Date(today2.setDate(today2.getDate() - today2.getDay()));

    const result = await getSalesByRangeDateAndStore(firstDateWeek, today, storeCode);

    return calculateTotalSales(result);
};

export const getSalesThisMonth = async (storeCode) => {
    const currentDate = new Date();

    // Lấy thời gian đầu tháng (ngày 1 của tháng hiện tại)
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    // Lấy thời gian hiện tại
    const now = new Date();
    const result = await getSalesByRangeDateAndStore(startOfMonth, now, storeCode);

    return calculateTotalSales(result);
};
