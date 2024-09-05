import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from 'react-native-modern-datepicker';

import styles from './SaleByReceiptStyles';
import { GlobalStyle, imageRequire } from '../../../config';
import {
    HeaderSecondnary,
    RowTableSummary,
    TableDetail,
    DateRangePicker,
    BtnSearch,
    ViewSaleCurrent,
    BtnFilter,
    ViewContainer,
    Loading,
} from '../../../components';
import { getSalesByReceipt } from './SaleByReceiptLogic';

const SaleByReceipt = () => {
    const { t } = useTranslation();

    const today = new Date();

    const todayFormat = getFormatedDate(today, 'YYYY/MM/DD');
    const [startDate, setStartDate] = useState(todayFormat);
    const [endDate, setEndDate] = useState(todayFormat);
    const [store, setStore] = useState('');

    const [dataForTable, setDataForTable] = useState([]);
    const [thisDaySales, setThisDaySales] = useState([]);
    const [loading, setLoading] = useState(false);

    const headerTable = ['Receipt', 'Payment date', 'Sales amount'];
    const rowsWidth = [1, 1.8, 1.3];

    const handleSearch = () => {
        setLoading(true);
        getSalesByReceipt(startDate, endDate, store)
            .then((result) => {
                setLoading(false);
                setDataForTable(result.dataTable);
                setThisDaySales(result.thisDaySales);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    };

    useEffect(() => {
        handleSearch();
    }, []);

    return (
        <ViewContainer>
            <HeaderSecondnary
                urlImage={imageRequire.SaleByReceipt}
                title={'Sale by receipt'}
                iconRight={'reload'}
                line="lineSolidOrange3"
                ionicon
            />
            <View>
                <RowTableSummary title="Term" sizeRowFirst={100} style={styles.dateRangePicker}>
                    <DateRangePicker
                        startDate={startDate}
                        setStartDate={setStartDate}
                        endDate={endDate}
                        setEndDate={setEndDate}
                    />
                </RowTableSummary>
                <RowTableSummary title="Store" sizeRowFirst={100}>
                    <BtnFilter title={'hyojung'} />
                </RowTableSummary>
                <RowTableSummary title="Receipt" sizeRowFirst={100}></RowTableSummary>
            </View>

            <BtnSearch handleSearch={handleSearch} />

            <ViewSaleCurrent title={'Day sales'} saleAmount={thisDaySales?.revenue} quantity={thisDaySales?.quantity} />

            <TableDetail data={dataForTable} headerTable={headerTable} rowsWidth={rowsWidth} />

            {loading && <Loading />}
        </ViewContainer>
    );
};

export default SaleByReceipt;
