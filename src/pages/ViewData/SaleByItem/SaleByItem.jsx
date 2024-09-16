import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getFormatedDate } from 'react-native-modern-datepicker';

import styles from './SaleByItemStyles';
import { imageRequire } from '../../../config';
import {
    HeaderSecondnary,
    RowTableSummary,
    TableDetail,
    DateRangePicker,
    BtnSearch,
    BtnFilter,
    ViewContainer,
    Loading,
} from '../../../components';
import { getSalesByItem } from './SaleByItemLogic';

const listStore = ['hyojung'];

const SaleByItem = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'ViewData' });

    const { stores } = useSelector((state) => state.dataStore);

    const [listStore, setListStore] = useState(['All']);

    const today = new Date();
    const todayFormat = getFormatedDate(today, 'YYYY/MM/DD');

    const [startDate, setStartDate] = useState(todayFormat);
    const [endDate, setEndDate] = useState(todayFormat);
    const [store, setStore] = useState(stores[0].storeName);

    const [dataForTable, setDataForTable] = useState([]);
    const [loading, setLoading] = useState(false);

    const headerTable = [t('Item'), t('Quantity'), t('SalesAmount')];
    const rowsWidth = [1.8, -1, 1.5];

    const handleChooseStore = (value) => {
        setStore(value);
    };

    const handleSearch = () => {
        setLoading(true);
        const storeSelected = stores.filter((value) => store === value.storeName)[0];
        const storeCode = storeSelected?.storeCode;
        getSalesByItem(startDate, endDate, storeCode)
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
    }, []);

    return (
        <ViewContainer>
            <HeaderSecondnary
                urlImage={imageRequire.SaleByItem}
                title={t('SaleByItem')}
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

            <TableDetail
                data={dataForTable}
                headerTable={headerTable}
                noDataContent={t('SalesHistory')}
                rowsWidth={rowsWidth}
            />

            {loading && <Loading />}
        </ViewContainer>
    );
};

export default SaleByItem;
