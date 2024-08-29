import { getSalesByDate, getSalesByMonth } from '../../services/searchServices';

export const paymentDetail = [
    { type: 'Cash', quantity: 0, revenue: 0 },
    { type: 'Cash Receipts', quantity: 0, revenue: 0 },
    { type: 'Credit Card', quantity: 0, revenue: 0 },
    { type: 'Other Payments', quantity: 0, revenue: 0 },
    { type: 'Total', quantity: 0, revenue: 0 },
];

export const getSummaeySaleDaily = async (date) => {
    const result = await getSalesByDate(date);

    const newDailySalesSummary = [...paymentDetail];
    newDailySalesSummary[0].quantity = 0;
    newDailySalesSummary[0].revenue = 0;
    newDailySalesSummary[1].quantity = 0;
    newDailySalesSummary[1].revenue = 0;
    newDailySalesSummary[2].quantity = 0;
    newDailySalesSummary[2].revenue = 0;
    newDailySalesSummary[3].quantity = 0;
    newDailySalesSummary[3].revenue = 0;
    newDailySalesSummary[4].quantity = 0;
    newDailySalesSummary[4].revenue = 0;

    if (result[0].Index == 0) return newDailySalesSummary;

    const listSaleToday = result.map((value) => ({
        totalAmout: value.합계금액,
        billNumber: value.전표번호,
        cash: value.현금,
        cashReceipts: value.현금영수증,
        creditCard: value.신용카드,
        otherPayments: value.기타지불,
    }));

    //console.log('dailySalesSummaryTemp', JSON.stringify(result, null, 2));

    listSaleToday.forEach((item) => {
        if (item.cash > 0) {
            newDailySalesSummary[0].quantity += 1;
            newDailySalesSummary[0].revenue += item.cash;
        }
        if (item.cashReceipts > 0) {
            newDailySalesSummary[1].quantity += 1;
            newDailySalesSummary[1].revenue += item.cashReceipts;
        }
        if (item.creditCard > 0) {
            newDailySalesSummary[2].quantity += 1;
            newDailySalesSummary[2].revenue += item.creditCard;
        }
        if (item.otherPayments > 0) {
            newDailySalesSummary[3].quantity += 1;
            newDailySalesSummary[3].revenue += item.otherPayments;
        }

        newDailySalesSummary[4].quantity += 1;
        newDailySalesSummary[4].revenue += item.totalAmout;
    });

    const formattedData = newDailySalesSummary.map((item) => ({
        ...item,
        revenue: item.revenue.toLocaleString('vi-VN'), // Định dạng tiền tệ
    }));
    return formattedData;
};

export const summaryMonthlySales = { quantity: 0, revenue: 0 };

export const getSaleMonthlySummary = async (year, month) => {
    const result = await getSalesByMonth(year.toString(), month.toString());

    console.log('monthlySalesSummaryTemp', JSON.stringify(result.slice(0, 3), null, 2));

    summaryMonthlySales.quantity = 0;
    summaryMonthlySales.revenue = 0;

    if (result[0].Index == 0) return summaryMonthlySales;

    const listSale = result.map((value) => ({
        totalAmount: value.합계금액,
    }));

    console.log('dailySalesSummaryTemp', JSON.stringify(result, null, 2));

    listSale.forEach((item) => {
        summaryMonthlySales.revenue += item.totalAmount;
        summaryMonthlySales.quantity++;
    });

    summaryMonthlySales.revenue = summaryMonthlySales.revenue.toLocaleString('vi-VN');
    return summaryMonthlySales;
};
