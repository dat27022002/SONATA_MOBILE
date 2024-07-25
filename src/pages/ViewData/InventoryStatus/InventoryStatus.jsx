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
    const { t } = useTranslation();

    const dataTableDetail = [
        { Item: 'Rượu good day', Barcode: 10062, Quantity: 96 },
        { Item: 'bia tiger', Barcode: 10009, Quantity: 97 },
    ];
    const headerTable = ['Item', 'Barcode', 'Quantity'];

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
                title={'Inventory status'}
                iconRight={'reload'}
                line="lineSolidOrange3"
                ionicon
            />
            <View>
                <RowTableSummary title="Store" sizeRowFirst={100}>
                    <BtnFilter title={'hyojung'} />
                </RowTableSummary>
                <RowTableSummary title="Category" sizeRowFirst={100} style={styles.viewIncoudeLack}>
                    <CheckBox tintColors={{ true: GlobalStyle.thirdTextColor, false: GlobalStyle.thirdTextColor }} />
                    <TextDefaut>Incoude Lack</TextDefaut>
                </RowTableSummary>
                <RowTableSummary title="Item name" sizeRowFirst={100}></RowTableSummary>
                <RowTableSummary title="Barcode" sizeRowFirst={100}></RowTableSummary>
            </View>

            <BtnSearch handleSearch={handleSearch} />

            <ViewSaleCurrent title={'This week sales'} saleAmount={'12.960'} quantity={0} />

            <TableDetail data={dataTableDetail} headerTable={headerTable} />

            {/* chart */}
            <BarChartCustom dataChart={dataChart} />
        </ViewContainer>
    );
};

export default InventoryStatus;
