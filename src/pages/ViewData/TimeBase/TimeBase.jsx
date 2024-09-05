import React, { useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from 'react-native-modern-datepicker';

import styles from './TimeBaseStyles';
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
import { getTimeBaseSales } from './TimeBaseLogic';

const TimeBase = () => {
    const { t } = useTranslation();

    const today = new Date();
    const todayFormat = getFormatedDate(today, 'YYYY-MM-DD');

    const [startDate, setStartDate] = useState(todayFormat);
    const [endDate, setEndDate] = useState(todayFormat);
    const [dataForChart, setDataForChart] = useState([]);
    const [dataForTable, setDataForTable] = useState([]);
    const [thisDaySales, setThisDaySales] = useState([]);
    const [loading, setLoading] = useState(false);

    const headerTable = ['Time', 'Quantity', 'Unit price', 'Sales amount'];
    const rowsWidth = [1.2, -1, 1.4, 1.6];

    const dataChart = {
        labels: dataForChart.map((item) => item.Time),
        datasets: [
            {
                data: dataForChart.map((item) => item['Sales amount']),
                colors: dataForChart.map(() => () => GlobalStyle.thirdTextColor),
            },
        ],
    };

    const handleSearch = () => {
        setLoading(true);
        getTimeBaseSales(startDate, endDate)
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

    return (
        <ViewContainer>
            <HeaderSecondnary
                urlImage={imageRequire.TimeBase}
                title={'Time-based sales'}
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
            </View>

            <BtnSearch handleSearch={handleSearch} />

            <ViewSaleCurrent title={'Day sales'} saleAmount={thisDaySales?.revenue} quantity={thisDaySales?.quantity} />

            <TableDetail data={dataForTable} headerTable={headerTable} rowsWidth={rowsWidth} />

            {/* chart */}
            <BarChartCustom dataChart={dataChart} />

            {loading && <Loading />}
        </ViewContainer>
    );
};

export default TimeBase;
