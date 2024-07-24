import React, { useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from 'react-native-modern-datepicker';

import styles from './MonthlySaleStyles';
import HeaderSecondnary from '../../../components/HeaderSecondnary';
import imageRequire from '../../../config/ImageRequire';
import GlobalStyle from '../../../config/GlobalStyle';
import RowTableSummary from '../../../components/RowTableSummary';
import TableDetail from '../../../components/TableDetail';
import DateRangePicker from '../../../components/DateRangePicker';
import BtnSearch from '../../../components/BtnSearch';
import ViewSaleCurrent from '../../../components/ViewSaleCurrent';
import BarChartCustom from '../../../components/BarChartCustom';
import BtnFilter from '../../../components/BtnFilter';
import ViewContainer from '../../../components/ViewContainer';

const MonthlySale = () => {
    const { t } = useTranslation();

    const today = new Date();

    const todayFormat = getFormatedDate(today, 'YYYY/MM/DD');
    const [startDate, setStartDate] = useState(todayFormat);
    const [endDate, setEndDate] = useState(todayFormat);

    const dataTableDetail = [
        { Month: '2024-07', Quantity: 1, 'Sales amount': '12960', Discount: '0' },
        { Month: '2024-07', Quantity: 1, 'Sales amount': '960', Discount: '0' },
        { Month: '2024-07', Quantity: 1, 'Sales amount': '1960', Discount: '0' },
        { Month: '2024-07', Quantity: 1, 'Sales amount': '2960', Discount: '0' },
        { Month: '2024-07', Quantity: 1, 'Sales amount': '14960', Discount: '0' },
    ];
    const headerTable = ['Month', 'Quantity', 'Sales amount', 'Discount'];

    const dataChart = {
        labels: dataTableDetail.map((item) => item.Month.substring(5)),
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
                    />
                </RowTableSummary>
                <RowTableSummary title="Store" sizeRowFirst={100}>
                    <BtnFilter title={'hyojung'} />
                </RowTableSummary>
            </View>

            <BtnSearch handleSearch={handleSearch} />

            <ViewSaleCurrent title={'Monthly sales list'} saleAmount={'16.073.760'} quantity={0} />

            <TableDetail data={dataTableDetail} headerTable={headerTable} />

            {/* chart */}
            <BarChartCustom dataChart={dataChart} />
        </ViewContainer>
    );
};

export default MonthlySale;
