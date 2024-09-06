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
    const { t } = useTranslation('translation', { keyPrefix: 'ViewData' });

    const dataTableDetail = [];
    const headerTable = [t('TableName'), t('FirstOrder'), t('LastOrder'), t('PaymentAmount')];

    return (
        <ViewContainer>
            <HeaderSecondnary
                urlImage={imageRequire.TableStatus}
                title={t('TableStatus')}
                iconRight={'reload'}
                line="lineSolidOrange3"
                ionicon
            />
            <View>
                <RowTableSummary title={t('OrderTables')}>
                    <TextDefaut>0</TextDefaut>
                </RowTableSummary>
                <RowTableSummary title={t('PaymentAmount')}>
                    <TextDefaut>0</TextDefaut>
                </RowTableSummary>
                <RowTableSummary title={t('Store')}>
                    <BtnFilter title={'hyojung'} />
                </RowTableSummary>
            </View>

            <TableDetail data={dataTableDetail} headerTable={headerTable} />
        </ViewContainer>
    );
};

export default TableStatus;
