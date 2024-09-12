import { getSalesByRangeDateAndStore } from '../../../services/searchServices';
import { salesRangeDates } from '../DataFake';
import { getSalesThisDay } from '../ViewDataLogic';

export const getApproveElectronicInvoice = async (dateStart, dateEnd, storeCode, posName, typeInvoice) => {
    //console.log(dateStart, ':', dateEnd, ':', posName, ':', typeInvoice);

    const [response, thisDaySales] = await Promise.all([
        getSalesByRangeDateAndStore(dateStart, dateEnd, storeCode),
        getSalesThisDay(storeCode),
    ]);

    //case there no revenue
    if (response[0].Index == 0)
        return {
            dataTable: [],
            thisDaySales: thisDaySales,
        };
    //console.log('getSalesByRangeDate: ', JSON.stringify(response.slice(0, 4), null, 2));

    const responseFilter = response.filter((value) => {
        const saleAmountFilter = value.합계금액 > 0;
        const posFilter = posName == 'All' ? true : value.포스번호 == posName;

        const enumType = { 'Have invoice': true, 'No invoice': false };
        const typeFilter = typeInvoice == 'All' ? true : value.계산서발행 == enumType[typeInvoice];
        return saleAmountFilter && posFilter && typeFilter;
    });

    const listSaleConvertEnglish = responseFilter.map((value) => ({
        date: value.수정일,
        totalAmount: value.합계금액,
        invoiceNo: value.INVOICE_NO,
        type: value.계산서발행,
    }));
    //console.log('listSaleConvertEnglish: ', JSON.stringify(listSaleConvertEnglish, null, 2));

    const tempResult = listSaleConvertEnglish.map((value) => ({
        paymentDate: value.date.replace('T', ' '),
        invoiceNo: typeof value.invoiceNo == 'string' ? value.invoiceNo : '',
        type: value.type ? 'Invoice' : 'No invoice',
        totalAmount: value.totalAmount,
    }));
    //console.log('tempResult: ', JSON.stringify(tempResult, null, 2));

    // Tính tổng Quantity và Sales amount
    const totalSalesAmount = tempResult.reduce((acc, item) => acc + item.totalAmount, 0);

    // Tạo một đối tượng cho tổng
    const totalRow = {
        paymentDate: 'Total Amount',
        invoiceNo: '',
        type: '',
        totalAmount: totalSalesAmount,
    };

    // Thêm hàng tổng vào đầu mảng
    tempResult.unshift(totalRow);
    //console.log('tempResult: ', JSON.stringify(tempResult, null, 2));

    const formatedResult = tempResult.map((value) => ({
        paymentDate: value.paymentDate,
        invoiceNo: value.invoiceNo,
        type: value.type,
        totalAmount: value.totalAmount.toLocaleString('vi-VN'),
    }));
    //console.log('formatedResult: ', JSON.stringify(formatedResult, null, 2));

    //tính toán tổng doanh thu cho tuần hiện tại

    const result = {
        dataTable: formatedResult,
        thisDaySales: thisDaySales,
        fullBillInfors: responseFilter,
    };

    //console.log('result: ', JSON.stringify(result, null, 2));

    return result;
};
