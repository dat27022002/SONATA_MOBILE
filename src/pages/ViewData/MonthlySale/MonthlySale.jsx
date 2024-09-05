import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from 'react-native-modern-datepicker';

import styles from './MonthlySaleStyles';
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
import { getSummarySalesRangeMonth } from './MonthlySaleLogic';

const listStore = ['hyojung'];

const MonthlySale = () => {
    const { t } = useTranslation();

    const today = new Date();
    const today2 = new Date();
    const twoMonthsAgo = new Date(today2.setMonth(today2.getMonth() - 2));
    const todayFormat = getFormatedDate(today, 'YYYY-MM');
    const twoMonthsAgoFormat = getFormatedDate(twoMonthsAgo, 'YYYY-MM');
    const [startDate, setStartDate] = useState(twoMonthsAgoFormat);
    const [endDate, setEndDate] = useState(todayFormat);
    const [store, setStore] = useState('hyojung');

    const [dataForChart, setdataForChart] = useState([]);
    const [dataForTable, setdataForTable] = useState([]);
    const [loading, setLoading] = useState(false);

    const headerTable = ['Month', 'Quantity', 'Sales amount', 'Discount'];
    const rowsWidth = [1.2, -1, 1.6, 1.6];

    const dataChart = {
        labels: dataForChart.map((item) => item.Month.substring(5)),
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
        getSummarySalesRangeMonth(startDate, endDate)
            .then((result) => {
                setLoading(false);
                const formatedResult = result.map((item) => ({
                    Month: item.Month,
                    Quantity: item.Quantity,
                    'Sales amount': item['Sales amount'].toLocaleString('vi-VN'),
                    Discount: item.Discount.toLocaleString('vi-VN'),
                }));

                if (result.length) result.shift(); //remove row total amount
                setdataForChart(result);
                setdataForTable(formatedResult);
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
                urlImage={imageRequire.MonthlySale}
                title={'Monthly sales list'}
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
                        mode="monthYear"
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

            <ViewSaleCurrent
                title={'Monthly sales list'}
                saleAmount={dataForTable.length ? dataForTable[0]['Sales amount'] : 0}
                quantity={dataForTable.length ? dataForTable[0]?.Quantity : 0}
            />

            <TableDetail data={dataForTable} headerTable={headerTable} rowsWidth={rowsWidth} />

            {/* chart */}
            <BarChartCustom dataChart={dataChart} />

            {loading && <Loading />}
        </ViewContainer>
    );
};

export default MonthlySale;
