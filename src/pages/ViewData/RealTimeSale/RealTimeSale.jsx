import React, { useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from 'react-native-modern-datepicker';

import styles from './RealTimeSaleStyles';
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

const RealTimeSale = () => {
    const { t } = useTranslation();

    const today = new Date();

    const todayFormat = getFormatedDate(today, 'YYYY/MM/DD');
    const [startDate, setStartDate] = useState(todayFormat);
    const [endDate, setEndDate] = useState(todayFormat);

    const dataTableDetail = [];
    const headerTable = ['Store name', 'Payment', 'Table'];

    const dataChart = {
        labels: dataTableDetail.map((item) => item.Date.substring(5)),
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
                urlImage={imageRequire.RealTimeSale}
                title={'Real time sale'}
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
                        isNotEndCalendar={true}
                    />
                </RowTableSummary>
                <RowTableSummary title="Store" sizeRowFirst={100}>
                    <BtnFilter title={'hyojung'} />
                </RowTableSummary>
            </View>

            <BtnSearch handleSearch={handleSearch} />

            <ViewSaleCurrent title={'Total sales'} saleAmount={0} quantity={0} />

            <TableDetail data={dataTableDetail} headerTable={headerTable} noDataContent="Sales history" />

            {/* chart */}
            <BarChartCustom dataChart={dataChart} />
        </ViewContainer>
    );
};

export default RealTimeSale;
