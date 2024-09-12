import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './DetailSalesInvoiceStyles';
import { imageRequire } from '../../../../config';
import { HeaderSecondnary, RowTableSummary, ViewContainer, Loading, TextDefaut } from '../../../../components';
import { getFilterPayment, getSalesItem } from './DetailSalesInvoiceLogic';

const DetailSales = ({ route }) => {
    const { t } = useTranslation('translation', { keyPrefix: 'ViewData' });

    const { data } = route.params;

    const [payments, setPayments] = useState([]);
    const [salesItems, setsalesItems] = useState([]);

    // const [dataForTable, setDataForTable] = useState([]);
    const [loading, setLoading] = useState(false);

    const handlelGetSalesItem = async () => {
        setLoading(true);
        getSalesItem(data.storeCode, data.billNo)
            .then((result) => {
                setLoading(false);
                setsalesItems(result);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    };

    useEffect(() => {
        const filterPayment = getFilterPayment(data);
        setPayments(filterPayment);
        handlelGetSalesItem();
    }, []);

    return (
        <ViewContainer>
            <HeaderSecondnary
                urlImage={imageRequire.CreditCardApproval}
                title={'Sales Detail'}
                iconRight={'reload'}
                line="lineSolidOrange3"
                ionicon
            />
            {/* summary */}
            <View>
                <RowTableSummary title={t('Store')} sizeRowFirst={150}>
                    <TextDefaut>{data.storeName}</TextDefaut>
                </RowTableSummary>
                <RowTableSummary title={t('ReceiptNo')} sizeRowFirst={150}>
                    <TextDefaut>{data.billNo}</TextDefaut>
                </RowTableSummary>
                <RowTableSummary title={t('InvoiceNo')} sizeRowFirst={150}>
                    <TextDefaut>{data.invoiceNo || ''}</TextDefaut>
                </RowTableSummary>
                <RowTableSummary title={t('PaymentDate')} sizeRowFirst={150}>
                    <TextDefaut>{data.paymentDate}</TextDefaut>
                </RowTableSummary>
            </View>
            {/* Order List */}
            <View style={styles.containerScrollView}>
                <ScrollView style={styles.ViewDetailSales}>
                    <TextDefaut large>{t('OrderList')}</TextDefaut>
                    <View style={styles.styleTable}>
                        {salesItems.map((value, rowIndex) => (
                            <View style={styles.styleRow} key={rowIndex}>
                                {Object.values(value).map((item, cellIndex) => (
                                    <Text
                                        key={cellIndex}
                                        style={[
                                            styles.styleCell,
                                            tableColumItemStyle[cellIndex],
                                            { fontWeight: rowIndex == salesItems.length - 1 ? '700' : '400' },
                                        ]}
                                    >
                                        {item}
                                    </Text>
                                ))}
                            </View>
                        ))}
                    </View>
                    {/* payment */}
                    <TextDefaut large style={{ marginTop: 20 }}>
                        {t('Payment')}
                    </TextDefaut>
                    <View style={styles.styleTable}>
                        {payments.map((value, rowIndex) => (
                            <View style={styles.styleRow} key={rowIndex}>
                                {Object.values(value).map((item, cellIndex) => (
                                    <Text
                                        key={cellIndex}
                                        style={[
                                            styles.styleCell,
                                            tableColumPaymentStyle[cellIndex],
                                            { fontWeight: rowIndex == payments.length - 1 ? '700' : '400' },
                                        ]}
                                    >
                                        {item}
                                    </Text>
                                ))}
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>

            {loading && <Loading />}
        </ViewContainer>
    );
};

export default DetailSales;

const tableColumItemStyle = [
    { flex: 2, textAlign: 'left' },
    { flex: 1, textAlign: 'center' },
    { flex: 1.2, textAlign: 'right' },
];

const tableColumPaymentStyle = [
    { flex: 2, textAlign: 'left' },
    { flex: 1, textAlign: 'right' },
];
