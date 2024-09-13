import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
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

const MonthlySale = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'ViewData' });

    const { stores } = useSelector((state) => state.dataStore);

    const [listStore, setListStore] = useState(['All']);

    const today = new Date();
    const today2 = new Date();
    const twoMonthsAgo = new Date(today2.setMonth(today2.getMonth() - 2));
    const todayFormat = getFormatedDate(today, 'YYYY-MM');
    const twoMonthsAgoFormat = getFormatedDate(twoMonthsAgo, 'YYYY-MM');
    const [startDate, setStartDate] = useState(twoMonthsAgoFormat);
    const [endDate, setEndDate] = useState(todayFormat);
    const [store, setStore] = useState('All');

    const [dataForChart, setDataForChart] = useState([]);
    const [dataForTable, setDataForTable] = useState([]);
    const [thisMonthSales, setThisMonthSales] = useState({ revenue: 0, quantity: 0 });
    const [loading, setLoading] = useState(false);

    const headerTable = [t('Month'), t('Quantity'), t('SalesAmount'), t('Discount')];
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
        const storeSelected = stores.filter((value) => store === value.storeName)[0];
        const storeCode = storeSelected?.storeCode;
        getSummarySalesRangeMonth(startDate, endDate, storeCode)
            .then((result) => {
                setLoading(false);
                setDataForChart(result.dataChart);
                setDataForTable(result.dataTable);
                setThisMonthSales(result.thisMonthSales);
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
                urlImage={imageRequire.MonthlySale}
                title={t('MonthlySalesList')}
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
                title={t('MonthlySalesList')}
                saleAmount={thisMonthSales.revenue}
                quantity={thisMonthSales.quantity}
            />

            <TableDetail data={dataForTable} headerTable={headerTable} rowsWidth={rowsWidth} />

            {/* chart */}
            <BarChartCustom dataChart={dataChart} />

            {loading && <Loading />}
        </ViewContainer>
    );
};

export default MonthlySale;
