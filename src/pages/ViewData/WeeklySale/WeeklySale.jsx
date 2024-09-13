import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getFormatedDate } from 'react-native-modern-datepicker';

import styles from './WeeklySaleStyles';
import { GlobalStyle, imageRequire } from '../../../config';
import {
    HeaderSecondnary,
    RowTableSummary,
    TableDetail,
    DateRangePicker,
    BtnSearch,
    ViewSaleCurrent,
    BarChartCustom,
    BtnFilter,
    ViewContainer,
    Loading,
} from '../../../components';
import { getWeeklySales } from './WeeklySaleLogic';

const WeeklySale = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'ViewData' });

    const { stores } = useSelector((state) => state.dataStore);

    const [listStore, setListStore] = useState(['All']);

    const today = new Date();
    const today2 = new Date();
    const firstDateWeek = new Date(today2.setDate(today2.getDate() - today2.getDay()));
    const todayFormat = getFormatedDate(today, 'YYYY-MM-DD');
    const firstDateWeekFormat = getFormatedDate(firstDateWeek, 'YYYY-MM-DD');

    const [startDate, setStartDate] = useState(firstDateWeekFormat);
    const [endDate, setEndDate] = useState(todayFormat);
    const [store, setStore] = useState('All');

    const [dataForChart, setDataForChart] = useState([]);
    const [dataForTable, setDataForTable] = useState([]);
    const [thisWeekSales, setThisWeekSales] = useState([]);
    const [loading, setLoading] = useState(false);

    const headerTable = [t('DayOfTheWeek'), t('BusinessDay'), t('Quantity'), t('SalesAmount'), t('Ratio')];
    const rowsWidth = [-1, -1, -1, 1.5, -1];

    const dataChart = {
        labels: dataForChart.map((item) => item['Day of the week']),
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
        getWeeklySales(startDate, endDate, storeCode)
            .then((result) => {
                setLoading(false);
                setDataForChart(result.dataChart);
                setDataForTable(result.dataTable);
                setThisWeekSales(result.thisWeekSales);
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
        setStore(storeNames[0]);
    }, []);

    return (
        <ViewContainer>
            <HeaderSecondnary
                urlImage={imageRequire.WeeklySale}
                title={t('WeeklySales')}
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
                title={t('ThisWeekSales')}
                saleAmount={thisWeekSales.revenue}
                quantity={thisWeekSales.quantity}
            />

            <TableDetail data={dataForTable} headerTable={headerTable} rowsWidth={rowsWidth} />

            {/* chart */}
            <BarChartCustom dataChart={dataChart} />

            {loading && <Loading />}
        </ViewContainer>
    );
};

export default WeeklySale;
