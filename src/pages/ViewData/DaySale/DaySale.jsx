import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from 'react-native-modern-datepicker';

import styles from './DaySaleStyles';
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
import { getDailySales } from './DailySaleLogic';

const listStore = ['hyojung'];

const DaySale = () => {
    const { t } = useTranslation();

    const today = new Date();
    const today2 = new Date();
    const firstDateWeek = new Date(today2.setDate(today2.getDate() - today2.getDay()));
    const todayFormat = getFormatedDate(today, 'YYYY-MM-DD');
    const firstDateWeekFormat = getFormatedDate(firstDateWeek, 'YYYY-MM-DD');

    const [startDate, setStartDate] = useState(firstDateWeekFormat);
    const [endDate, setEndDate] = useState(todayFormat);
    const [store, setStore] = useState('hyojung');

    const [dataForChart, setDataForChart] = useState([]);
    const [dataForTable, setDataForTable] = useState([]);
    const [thisDaySales, setThisDaySales] = useState({ revenue: 0, quantity: 0 });
    const [loading, setLoading] = useState(false);

    const headerTable = ['Date', 'Quantity', 'Guest', 'Customer price', 'Sales amount'];
    const rowsWidth = [1.2, -1, -1, -1, 1.5];

    const dataChart = {
        labels: dataForChart.slice(1).map((item) => item.Date.substring(5)),
        datasets: [
            {
                data: dataForChart.slice(1).map((item) => item['Sales amount']),
                colors: dataForChart.slice(1).map(() => () => GlobalStyle.thirdTextColor),
            },
        ],
    };

    const handleChooseStore = (value) => {
        setStore(value);
    };

    const handleSearch = () => {
        setLoading(true);
        getDailySales(startDate, endDate, store)
            .then((result) => {
                setLoading(false);
                setDataForChart(result.dataChart);
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
                urlImage={imageRequire.DaySale}
                title={'Day sales list'}
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

            <ViewSaleCurrent title={'Day sales'} saleAmount={thisDaySales.revenue} quantity={thisDaySales.quantity} />

            <TableDetail data={dataForTable} headerTable={headerTable} rowsWidth={rowsWidth} />

            {/* chart */}
            <BarChartCustom dataChart={dataChart} />

            {loading && <Loading />}
        </ViewContainer>
    );
};

export default DaySale;
