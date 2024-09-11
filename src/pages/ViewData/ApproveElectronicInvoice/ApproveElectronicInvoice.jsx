import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getFormatedDate } from 'react-native-modern-datepicker';

import styles from './ApproveElectronicInvoiceStyles';
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
import { getApproveElectronicInvoice } from './ApproveElectronicInvoiceLogic';

const listType = ['All', 'Have invoice', 'No invoice'];

const ApproveElectronicInvoice = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'ViewData' });

    const { stores, POSs } = useSelector((state) => state.dataStore);

    const [listStore, setListStore] = useState(['All']);
    const [listPOS, setListPOS] = useState(['All']);

    const today = new Date();
    const today2 = new Date();
    const firstDateWeek = new Date(today2.setDate(today2.getDate() - today2.getDay()));
    const todayFormat = getFormatedDate(today, 'YYYY-MM-DD');
    const firstDateWeekFormat = getFormatedDate(firstDateWeek, 'YYYY-MM-DD');

    const [startDate, setStartDate] = useState(firstDateWeekFormat);
    const [endDate, setEndDate] = useState(todayFormat);
    const [store, setStore] = useState('All');
    const [POS, setPOS] = useState('All');
    const [type, setType] = useState('All');

    const [dataForTable, setDataForTable] = useState([]);
    const [loading, setLoading] = useState(false);

    const headerTable = [t('PaymentDate'), t('InvoiceNo'), t('Type'), t('SalesAmount')];
    const rowsWidth = [1.8, 1.2, 1, 1.5];

    const handleChoosePOS = (value) => {
        setPOS(value);
    };

    const handleChooseStore = (value) => {
        setStore(value);
    };

    const handleChooseType = (value) => {
        setType(value);
    };

    const handleSearch = () => {
        setLoading(true);
        const storeSelected = stores.filter((value) => store === value.storeName)[0];
        const storeCode = storeSelected?.storeCode;
        getApproveElectronicInvoice(startDate, endDate, storeCode, POS, type)
            .then((result) => {
                setLoading(false);
                setDataForTable(result.dataTable);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    };

    useEffect(() => {
        handleSearch();
        const storeNames = stores.map((value) => value.storeName);
        setListStore(storeNames);
        const posNames = POSs.map((value) => value.posName);
        setListPOS(posNames);
    }, []);

    return (
        <ViewContainer>
            <HeaderSecondnary
                urlImage={imageRequire.CreditCardApproval}
                title={t('ApproveElectronicInvoice')}
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
                <RowTableSummary title={t('POS')} sizeRowFirst={100}>
                    <BtnFilter title={POS} listOptions={listPOS} titleModal={t('POS')} handleFilter={handleChoosePOS} />
                </RowTableSummary>
                <RowTableSummary title={t('Type')} sizeRowFirst={100}>
                    <BtnFilter
                        title={type}
                        listOptions={listType}
                        titleModal={t('Type')}
                        handleFilter={handleChooseType}
                    />
                </RowTableSummary>
            </View>

            <BtnSearch handleSearch={handleSearch} />

            <ViewSaleCurrent title={t('DaySales')} saleAmount={0} quantity={0} />

            <TableDetail
                data={dataForTable}
                headerTable={headerTable}
                noDataContent={t('NoData')}
                rowsWidth={rowsWidth}
            />

            {loading && <Loading />}
        </ViewContainer>
    );
};

export default ApproveElectronicInvoice;
