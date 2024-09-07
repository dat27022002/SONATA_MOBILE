import { getBillCanncel } from '../../../services/searchServices';
import { billCancels } from '../DataFake';

export const getRefundHistory = async (dateStart, dateEnd, store) => {
    //console.log(dateStart, ':', dateEnd);

    const response = await getBillCanncel(dateStart, dateEnd, 'HYOJUNG');
    //const response = billCancels;

    //case there no revenue
    if (response[0].Index == 0)
        return {
            dataTable: [],
        };
    // //console.log('getBillCanncel: ', JSON.stringify(response.slice(0, 4), null, 2));

    const listSaleConvertEnglish = response.map((value) => ({
        'Cancel date': value.modificatonDate.replace('T', ' '),
        Item: value.itemName,
        Quantity: value.quantity,
    }));
    //console.log('listSaleConvertEnglish: ', JSON.stringify(listSaleConvertEnglish, null, 2));

    const result = {
        dataTable: listSaleConvertEnglish,
    };

    // console.log('result: ', JSON.stringify(result, null, 2));

    return result;
};
