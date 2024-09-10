import { getSalesByRangeDateAndStore } from '../../../services/searchServices';
import { salesRangeDates } from '../DataFake';
import { getSalesThisDay } from '../ViewDataLogic';

const getTypeCard = (value) => {
    if (!isNaN(value)) {
        if (value === 10) return 'ETC';
        if (value === 11) return 'Visa';
        if (value === 12) return 'Master Card';
    }
    return 'Unknown';
};

export const getCreditCardApproval = async (dateStart, dateEnd, storeCode) => {
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
            thisDaySales: thisDaySales,
        };
    //console.log('getSalesByRangeDate: ', JSON.stringify(response.slice(0, 4), null, 2));

    const responseFilter = response.filter((value) => value.신용카드 > 0);

    const listSaleConvertEnglish = responseFilter.map((value) => ({
        date: value.일자,
        totalAmount: value.합계금액,
        card: value.받은돈,
        POS: value.포스번호,
    }));
    //console.log('listSaleConvertEnglish: ', JSON.stringify(listSaleConvertEnglish, null, 2));

    const tempResult = listSaleConvertEnglish.map((value) => ({
        paymentDate: value.date.replace('T', ' '),
        card: getTypeCard(value.card),
        totalAmount: value.totalAmount,
    }));

    // Tính tổng Quantity và Sales amount
    const totalSalesAmount = tempResult.reduce((acc, item) => acc + item.totalAmount, 0);

    // Tạo một đối tượng cho tổng
    const totalRow = {
        paymentDate: 'Total Amount',
        card: '',
        totalAmount: totalSalesAmount,
    };

    // Thêm hàng tổng vào đầu mảng
    tempResult.unshift(totalRow);
    //console.log('tempResult: ', JSON.stringify(tempResult, null, 2));

    const formatedResult = tempResult.map((value) => ({
        paymentDate: value.paymentDate,
        card: value.card,
        totalAmount: value.totalAmount.toLocaleString('vi-VN'),
    }));
    //console.log('formatedResult: ', JSON.stringify(formatedResult, null, 2));

    //tính toán tổng doanh thu cho tuần hiện tại

    const result = {
        dataTable: formatedResult,
        thisDaySales: thisDaySales,
    };

    // console.log('result: ', JSON.stringify(result, null, 2));

    return result;
};
