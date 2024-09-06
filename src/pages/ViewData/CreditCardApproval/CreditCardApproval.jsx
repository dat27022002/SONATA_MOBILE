import React, { useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from 'react-native-modern-datepicker';

import styles from './CreditCardApprovalStyles';
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

const CreditCardApproval = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'ViewData' });

    const today = new Date();

    const todayFormat = getFormatedDate(today, 'YYYY/MM/DD');
    const [startDate, setStartDate] = useState(todayFormat);
    const [endDate, setEndDate] = useState(todayFormat);
    const [type, setType] = useState('All');
    const [POS, setPOS] = useState('All');

    const dataTableDetail = [];
    const headerTable = [t('PaymentDate'), t('Card'), t('Type'), t('SalesAmount')];

    const dataChart = {
        labels: dataTableDetail.map((item) => item.Date.substring(5)),
        datasets: [
            {
                data: dataTableDetail.map((item) => item['Sales amount']),
                colors: dataTableDetail.map(() => () => GlobalStyle.thirdTextColor),
            },
        ],
    };

    listTypes = ['All', 'Approval', 'Cancel approval'];
    listPOSs = ['All', 'POS1', 'POS2', 'POS3'];

    const handleSearch = () => {};

    const handleChooseType = (item) => {
        setType(item);
    };

    const handleChoosePOS = (item) => {
        setPOS(item);
    };

    return (
        <ViewContainer>
            <HeaderSecondnary
                urlImage={imageRequire.CreditCardApproval}
                title={t('CreditCardApproval')}
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
                    <BtnFilter title={'hyojung'} />
                </RowTableSummary>
                <RowTableSummary title={t('Type')} sizeRowFirst={100}>
                    <BtnFilter title={type} listOptions={listTypes} titleModal="Type" handleFilter={handleChooseType} />
                </RowTableSummary>
                <RowTableSummary title={t('POS')} sizeRowFirst={100}>
                    <BtnFilter title={POS} listOptions={listPOSs} titleModal="POS" handleFilter={handleChoosePOS} />
                </RowTableSummary>
            </View>

            <BtnSearch handleSearch={handleSearch} />

            <ViewSaleCurrent title={t('DaySales')} saleAmount={0} quantity={0} />

            <TableDetail data={dataTableDetail} headerTable={headerTable} noDataContent={t('NoData')} />

            {/* chart */}
            <BarChartCustom dataChart={dataChart} />
        </ViewContainer>
    );
};

export default CreditCardApproval;
