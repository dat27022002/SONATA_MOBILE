import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
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

const listStore = ['hyojung'];

const ItemRank = () => {
    const { t } = useTranslation();

    const today = new Date();
    const todayFormat = getFormatedDate(today, 'YYYY/MM/DD');

    const [startDate, setStartDate] = useState(todayFormat);
    const [endDate, setEndDate] = useState(todayFormat);
    const [store, setStore] = useState('hyojung');

    const [dataForChart, setDataForChart] = useState([]);
    const [dataForTable, setDataForTable] = useState([]);
    const [loading, setLoading] = useState(false);

    const headerTable = ['Rank', 'Item', 'Quantity', 'Amount', 'Share'];
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
        getItemRank(startDate, endDate, store)
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
    }, []);

    return (
        <ViewContainer>
            <HeaderSecondnary
                urlImage={imageRequire.ItemRank}
                title={'Item rank'}
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

            {/* chart */}
            <BarChartCustom dataChart={dataChart} />

            {loading && <Loading />}
        </ViewContainer>
    );
};

export default ItemRank;
