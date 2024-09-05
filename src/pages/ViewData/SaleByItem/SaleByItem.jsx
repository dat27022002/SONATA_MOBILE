import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();

    const today = new Date();
    const todayFormat = getFormatedDate(today, 'YYYY/MM/DD');

    const [startDate, setStartDate] = useState(todayFormat);
    const [endDate, setEndDate] = useState(todayFormat);
    const [store, setStore] = useState('hyojung');

    const [dataForTable, setDataForTable] = useState([]);
    const [loading, setLoading] = useState(false);

    const headerTable = ['Item', 'Quantity', 'Sales amount'];
    const rowsWidth = [1.8, -1, 1.5];

    const handleChooseStore = (value) => {
        setStore(value);
    };

    const handleSearch = () => {
        setLoading(true);
        getSalesByItem(startDate, endDate, store)
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
    }, []);

    return (
        <ViewContainer>
            <HeaderSecondnary
                urlImage={imageRequire.SaleByItem}
                title={'Sale by item'}
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
                    <BtnFilter
                        title={store}
                        listOptions={listStore}
                        titleModal="Store"
                        handleFilter={handleChooseStore}
                    />
                </RowTableSummary>
            </View>

            <BtnSearch handleSearch={handleSearch} />

            <TableDetail
                data={dataForTable}
                headerTable={headerTable}
                noDataContent="Sales history"
                rowsWidth={rowsWidth}
            />

            {loading && <Loading />}
        </ViewContainer>
    );
};

export default SaleByItem;
