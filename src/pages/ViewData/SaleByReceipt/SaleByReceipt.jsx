import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from 'react-native-modern-datepicker';

import styles from './SaleByReceiptStyles';
import { imageRequire } from '../../../config';
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

const listStore = ['hyojung'];

const SaleByReceipt = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'ViewData' });

    const today = new Date();

    const todayFormat = getFormatedDate(today, 'YYYY/MM/DD');
    const [startDate, setStartDate] = useState(todayFormat);
    const [endDate, setEndDate] = useState(todayFormat);
    const [store, setStore] = useState('hyojung');

    const [dataForTable, setDataForTable] = useState([]);
    const [thisDaySales, setThisDaySales] = useState({ revenue: 0, quantity: 0 });
    const [loading, setLoading] = useState(false);

    const headerTable = [t('Receipt'), t('PaymentDate'), t('SalesAmount')];
    const rowsWidth = [1, 1.8, 1.3];

    const handleChooseStore = (value) => {
        setStore(value);
    };

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
                title={t('SalesByReceipt')}
                iconRight={'reload'}
                line="lineSolidOrange3"
                ionicon
            />
            <View>
                <RowTableSummary title={t('Term')} sizeRowFirst={100} style={styles.dateRangePicker}>
                    <DateRangePicker
                        startDate={startDate}
                        setStartDate={setStartDate}
                        endDate={endDate}
                        setEndDate={setEndDate}
                    />
                </RowTableSummary>
                <RowTableSummary title={t('Store')} sizeRowFirst={100}>
                    <BtnFilter
                        title={store}
                        listOptions={listStore}
                        titleModal={t('Store')}
                        handleFilter={handleChooseStore}
                    />
                </RowTableSummary>
            </View>

            <BtnSearch handleSearch={handleSearch} />

            <ViewSaleCurrent
                title={t('DaySales')}
                saleAmount={thisDaySales?.revenue}
                quantity={thisDaySales?.quantity}
            />

            <TableDetail data={dataForTable} headerTable={headerTable} rowsWidth={rowsWidth} />

            {loading && <Loading />}
        </ViewContainer>
    );
};

export default SaleByReceipt;
