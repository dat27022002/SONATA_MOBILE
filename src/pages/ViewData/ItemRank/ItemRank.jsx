import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getFormatedDate } from 'react-native-modern-datepicker';

import styles from './ItemRankStyles';
import { GlobalStyle, imageRequire } from '../../../config';
import {
    HeaderSecondnary,
    RowTableSummary,
    TableDetail,
    DateRangePicker,
    BtnSearch,
    BtnFilter,
    ViewContainer,
    BarChartCustom,
    Loading,
} from '../../../components';
import { getItemRank } from './ItemRankLogic';

const ItemRank = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'ViewData' });

    const { stores } = useSelector((state) => state.dataStore);

    const [listStore, setListStore] = useState(['All']);

    const today = new Date();
    const todayFormat = getFormatedDate(today, 'YYYY/MM/DD');

    const [startDate, setStartDate] = useState(todayFormat);
    const [endDate, setEndDate] = useState(todayFormat);
    const [store, setStore] = useState(stores[0].storeName);

    const [dataForChart, setDataForChart] = useState([]);
    const [dataForTable, setDataForTable] = useState([]);
    const [loading, setLoading] = useState(false);

    const headerTable = [t('Rank'), t('Item'), t('Quantity'), t('Amount'), t('Share')];
    const rowsWidth = [0.5, 1.8, 0.8, 1.5, 0.8];

    const dataChart = {
        labels: dataForChart.map((item) => item.Item),
        datasets: [
            {
                data: dataForChart.map((item) => item['Sales amount']),
                colors: dataForChart.map(() => () => GlobalStyle.thirdTextColor),
            },
        ],
    };

    const handleChooseStore = (value) => {
        setStore(value);
    };

    const handleSearch = () => {
        setLoading(true);
        const storeSelected = stores.filter((value) => store === value.storeName)[0];
        const storeCode = storeSelected?.storeCode;
        getItemRank(startDate, endDate, storeCode)
            .then((result) => {
                setLoading(false);
                setDataForTable(result.dataTable);
                setDataForChart(result.dataChart);
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
                urlImage={imageRequire.ItemRank}
                title={t('ItemRank')}
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

            {/* chart */}
            <BarChartCustom dataChart={dataChart} />

            {loading && <Loading />}
        </ViewContainer>
    );
};

export default ItemRank;
