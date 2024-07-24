import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { imageRequire } from '../../../config';
import {
    HeaderSecondnary,
    RowTableSummary,
    TableDetail,
    BtnFilter,
    ViewContainer,
    TextDefaut,
} from '../../../components';

const TableStatus = () => {
    const { t } = useTranslation();

    const dataTableDetail = [];
    const headerTable = ['Table Name', 'First order', 'Last order', 'Payment amount'];

    return (
        <ViewContainer>
            <HeaderSecondnary
                urlImage={imageRequire.TableStatus}
                title={'Table status'}
                iconRight={'reload'}
                line="lineSolidOrange3"
                ionicon
            />
            <View>
                <RowTableSummary title="Orderd tables">
                    <TextDefaut>0</TextDefaut>
                </RowTableSummary>
                <RowTableSummary title="Payment ammount">
                    <TextDefaut>0</TextDefaut>
                </RowTableSummary>
                <RowTableSummary title="Orderd tables">
                    <BtnFilter title={'hyojung'} />
                </RowTableSummary>
            </View>

            <TableDetail data={dataTableDetail} headerTable={headerTable} />
        </ViewContainer>
    );
};

export default TableStatus;
