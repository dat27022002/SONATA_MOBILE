import React, { useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
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
} from '../../../components';

const WeeklySale = () => {
    const { t } = useTranslation();

    const today = new Date();

    const todayFormat = getFormatedDate(today, 'YYYY/MM/DD');
    const [startDate, setStartDate] = useState(todayFormat);
    const [endDate, setEndDate] = useState(todayFormat);

    const dataTableDetail = [
        { 'Day of the week': 'Sun', 'Business day': 1, Quantity: 1, 'Sales amount': '12960', Ratio: '0%' },
        { 'Day of the week': 'Mon', 'Business day': 1, Quantity: 1, 'Sales amount': '0', Ratio: '0%' },
        { 'Day of the week': 'Tue', 'Business day': 1, Quantity: 1, 'Sales amount': '12960', Ratio: '100%' },
        { 'Day of the week': 'Wed', 'Business day': 1, Quantity: 1, 'Sales amount': '12960', Ratio: '0%' },
        { 'Day of the week': 'Thus', 'Business day': 1, Quantity: 1, 'Sales amount': '12960', Ratio: '0%' },
        { 'Day of the week': 'Fri', 'Business day': 1, Quantity: 1, 'Sales amount': '1960', Ratio: '0%' },
        { 'Day of the week': 'Sat', 'Business day': 1, Quantity: 1, 'Sales amount': '15960', Ratio: '0%' },
    ];
    const headerTable = ['Day of the week', 'Business day', 'Quantity', 'Sales amount', 'Ratio  '];

    const dataChart = {
        labels: dataTableDetail.map((item) => item['Day of the week']),
        datasets: [
            {
                data: dataTableDetail.map((item) => item['Sales amount']),
                colors: dataTableDetail.map(() => () => GlobalStyle.thirdTextColor),
            },
        ],
    };

    const handleSearch = () => {};

    return (
        <ViewContainer>
            <HeaderSecondnary
                urlImage={imageRequire.WeeklySale}
                title={'Weekly sales list'}
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

            <ViewSaleCurrent title={'This week sales'} saleAmount={'12.960'} quantity={0} />

            <TableDetail data={dataTableDetail} headerTable={headerTable} />

            {/* chart */}
            <BarChartCustom dataChart={dataChart} />
        </ViewContainer>
    );
};

export default WeeklySale;
