import { getSalesByRangeDateAndStore } from '../../../services/searchServices';
import { getSalesThisMonth } from '../ViewDataLogic';

export const getSummarySalesRangeMonth = async (dateStart, dateEnd, storeCode) => {
    const formatedStartDate = `${dateStart}-01`;
    const [yearEnd, monthEnd] = dateEnd.split('-');
    const lastDayEnd = new Date(yearEnd, monthEnd, 0).getDate();
    const formatedEndDate = `${dateEnd}-${lastDayEnd}`;

    const [response, thisMonthSales] = await Promise.all([
        getSalesByRangeDateAndStore(formatedStartDate, formatedEndDate, storeCode),
        getSalesThisMonth(storeCode),
    ]);

    //case there no revenue
    if (response[0].Index == 0)
        return {
            dataTable: [],
            dataChart: [],
            thisMonthSales: { revenue: 0, quantity: 0 },
        };
    //console.log('getSalesByRangeDate: ', JSON.stringify(response.slice(0, 4), null, 2));

    const listSale = response.map((value) => ({
        date: value.일자,
        totalAmout: value.합계금액,
        billNumber: value.전표번호,
        cash: value.현금,
        cashReceipts: value.현금영수증,
        creditCard: value.신용카드,
        giftCard: value.자사상품권,
        point: value.포인트,
        otherPayments: value.기타지불,
        discount: value.할인,
    }));

    // console.log('getSalesByRangeMonth: ', JSON.stringify(listSale.slice(0, 4), null, 2));
    const result = {};
    listSale.forEach((sale) => {
        const month = sale.date.slice(0, 7); // Lấy năm-tháng từ chuỗi ngày

        if (!result[month]) {
            result[month] = {
                Month: month,
                Quantity: 0,
                'Sales amount': 0,
                Discount: 0,
            };
        }

        // Cộng dồn các giá trị vào kết quả
        result[month].Quantity += 1;
        result[month]['Sales amount'] += sale.totalAmout;
        result[month].Discount += sale.discount;
    });

    const summarySalesArr = Object.values(result).map((item) => ({
        Month: item.Month,
        Quantity: item.Quantity,
        'Sales amount': item['Sales amount'],
        Discount: item.Discount,
    }));

    // Tính tổng Quantity và Sales amount
    const totalQuantity = summarySalesArr.reduce((acc, item) => acc + item.Quantity, 0);
    const totalSalesAmount = summarySalesArr.reduce((acc, item) => acc + item['Sales amount'], 0);
    const totalDiscount = summarySalesArr.reduce((acc, item) => acc + item.Discount, 0);

    // Tạo một đối tượng cho tổng
    const totalRow = {
        Month: 'Total Amount',
        Quantity: totalQuantity,
        'Sales amount': totalSalesAmount,
        Discount: totalDiscount,
    };

    // Thêm hàng tổng vào đầu mảng
    summarySalesArr.unshift(totalRow);

    //console.log('getSalesByRangeMonthView: ', JSON.stringify(summarySalesArrResult, null, 2));

    const formatedSummaryMonthlyArr = summarySalesArr.map((item) => ({
        Month: item.Month,
        Quantity: item.Quantity,
        'Sales amount': item['Sales amount'].toLocaleString('vi-VN'),
        Discount: item.Discount.toLocaleString('vi-VN'),
    }));

    summarySalesArr.shift(); //remove row total to draw chart because chart has no row total

    // //tính toán tổng doanh thu cho tuần hiện tại

    const finalResult = {
        dataTable: formatedSummaryMonthlyArr,
        dataChart: summarySalesArr,
        thisMonthSales: thisMonthSales,
    };

    //console.log('result: ', JSON.stringify(result, null, 2));

    return finalResult;
};
