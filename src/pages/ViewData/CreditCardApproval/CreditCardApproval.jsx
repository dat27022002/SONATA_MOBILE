import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from 'react-native-modern-datepicker';

import styles from './CreditCardApprovalStyles';
import { imageRequire } from '../../../config';
import {
    HeaderSecondnary,
    RowTableSummary,
    TableDetail,
    DateRangePicker,
    BtnSearch,
    ViewSaleCurrent,
    BtnFilter,
    ViewContainer,
    Loading,
} from '../../../components';
import { getCreditCardApproval } from './CreditCardApprovalLogic';

const listStore = ['hyojung'];

const CreditCardApproval = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'ViewData' });

    const today = new Date();
    const today2 = new Date();
    const firstDateWeek = new Date(today2.setDate(today2.getDate() - today2.getDay()));
    const todayFormat = getFormatedDate(today, 'YYYY-MM-DD');
    const firstDateWeekFormat = getFormatedDate(firstDateWeek, 'YYYY-MM-DD');

    const [startDate, setStartDate] = useState(firstDateWeekFormat);
    const [endDate, setEndDate] = useState(todayFormat);
    const [store, setStore] = useState('hyojung');
    const [type, setType] = useState('All');
    const [POS, setPOS] = useState('All');

    const [dataForTable, setDataForTable] = useState([]);
    const [loading, setLoading] = useState(false);

    const headerTable = [t('PaymentDate'), t('Card'), t('SalesAmount')];
    const rowsWidth = [1.2, 1, 1.5];

    listTypes = ['All', 'Approval', 'Cancel approval'];
    listPOSs = ['All', 'POS1', 'POS2', 'POS3'];

    const handleChooseType = (item) => {
        setType(item);
    };

    const handleChoosePOS = (item) => {
        setPOS(item);
    };

    const handleChooseStore = (value) => {
        setStore(value);
    };

    const handleSearch = () => {
        setLoading(true);
        getCreditCardApproval(startDate, endDate, store)
            .then((result) => {
                setLoading(false);
                setDataForTable(result.dataTable);
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
                    <BtnFilter
                        title={store}
                        listOptions={listStore}
                        titleModal={t('Store')}
                        handleFilter={handleChooseStore}
                    />
                </RowTableSummary>
                {/* <RowTableSummary title={t('Type')} sizeRowFirst={100}>
                    <BtnFilter
                        title={type}
                        listOptions={listTypes}
                        titleModal={t('Type')}
                        handleFilter={handleChooseType}
                    />
                </RowTableSummary> */}
                <RowTableSummary title={t('POS')} sizeRowFirst={100}>
                    <BtnFilter
                        title={POS}
                        listOptions={listPOSs}
                        titleModal={t('POS')}
                        handleFilter={handleChoosePOS}
                    />
                </RowTableSummary>
            </View>

            <BtnSearch handleSearch={handleSearch} />

            <ViewSaleCurrent title={t('DaySales')} saleAmount={0} quantity={0} />

            <TableDetail
                data={dataForTable}
                headerTable={headerTable}
                noDataContent={t('NoData')}
                rowsWidth={rowsWidth}
            />

            {loading && <Loading />}
        </ViewContainer>
    );
};

export default CreditCardApproval;
