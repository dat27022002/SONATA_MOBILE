import React, { useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from 'react-native-modern-datepicker';

import styles from './OrderCancelListStyles';
import { GlobalStyle, imageRequire } from '../../../config';
import {
    HeaderSecondnary,
    RowTableSummary,
    TableDetail,
    DateRangePicker,
    BtnSearch,
    BtnFilter,
    ViewContainer,
} from '../../../components';

const OrderCancelList = () => {
    const { t } = useTranslation();

    const today = new Date();

    const todayFormat = getFormatedDate(today, 'YYYY/MM/DD');
    const [startDate, setStartDate] = useState(todayFormat);
    const [endDate, setEndDate] = useState(todayFormat);
    const [POS, setPOS] = useState('All');

    const dataTableDetail = [];
    const headerTable = ['Pos', 'Cancel date', 'Item', 'Quantity'];

    const dataChart = {
        labels: dataTableDetail.map((item) => item.Date.substring(5)),
        datasets: [
            {
                data: dataTableDetail.map((item) => item['Sales amount']),
                colors: dataTableDetail.map(() => () => GlobalStyle.thirdTextColor),
            },
        ],
    };

    listPOSs = ['All', 'POS1', 'POS2', 'POS3'];

    const handleChoosePOS = (item) => {
        setPOS(item);
    };

    const handleSearch = () => {};

    return (
        <ViewContainer>
            <HeaderSecondnary
                urlImage={imageRequire.OrderCancelList}
                title={'Order cancel list'}
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
                <RowTableSummary title="POS" sizeRowFirst={100}>
                    <BtnFilter title={POS} listOptions={listPOSs} titleModal="POS" handleFilter={handleChoosePOS} />
                </RowTableSummary>
            </View>

            <BtnSearch handleSearch={handleSearch} />

            <TableDetail data={dataTableDetail} headerTable={headerTable} noDataContent="No cancellation" />
        </ViewContainer>
    );
};

export default OrderCancelList;
