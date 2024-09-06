import React, { useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from 'react-native-modern-datepicker';
import CheckBox from '@react-native-community/checkbox';

import styles from './InventoryStatusStyles';
import { GlobalStyle, imageRequire } from '../../../config';
import {
    HeaderSecondnary,
    RowTableSummary,
    TableDetail,
    BtnSearch,
    ViewSaleCurrent,
    BarChartCustom,
    BtnFilter,
    ViewContainer,
    TextDefaut,
} from '../../../components';

const InventoryStatus = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'ViewData' });

    const dataTableDetail = [
        { Item: 'Rượu good day', Barcode: 10062, Quantity: 96 },
        { Item: 'bia tiger', Barcode: 10009, Quantity: 97 },
    ];
    const headerTable = [t('Item'), t('Barcode'), t('Quantity')];

    const dataChart = {
        labels: dataTableDetail.map((item) => item['Item']),
        datasets: [
            {
                data: dataTableDetail.map((item) => item['Barcode']),
                colors: dataTableDetail.map(() => () => GlobalStyle.thirdTextColor),
            },
        ],
    };

    const handleSearch = () => {};

    return (
        <ViewContainer>
            <HeaderSecondnary
                urlImage={imageRequire.InventoryStatus}
                title={t('InventoryStatus')}
                iconRight={'reload'}
                line="lineSolidOrange3"
                ionicon
            />
            <View>
                <RowTableSummary title={t('Store')} sizeRowFirst={100}>
                    <BtnFilter title={'hyojung'} />
                </RowTableSummary>
                <RowTableSummary title={t('Category')} sizeRowFirst={100} style={styles.viewIncoudeLack}>
                    <CheckBox tintColors={{ true: GlobalStyle.thirdTextColor, false: GlobalStyle.thirdTextColor }} />
                    <TextDefaut>{t('IncludeLack')}</TextDefaut>
                </RowTableSummary>
                <RowTableSummary title={t('ItemName')} sizeRowFirst={100}></RowTableSummary>
                <RowTableSummary title={t('Barcode')} sizeRowFirst={100}></RowTableSummary>
            </View>

            <BtnSearch handleSearch={handleSearch} />

            <ViewSaleCurrent title={t('ThisWeekSales')} saleAmount={'12.960'} quantity={0} />

            <TableDetail data={dataTableDetail} headerTable={headerTable} />

            {/* chart */}
            <BarChartCustom dataChart={dataChart} />
        </ViewContainer>
    );
};

export default InventoryStatus;
