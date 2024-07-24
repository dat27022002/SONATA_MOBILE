import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome';

import HeaderSecondnary from '../../../components/HeaderSecondnary';
import imageRequire from '../../../config/ImageRequire';
import TextDefaut from '../../../components/TextDefaut';
import RowTableSummary from '../../../components/RowTableSummary';
import TableDetail from '../../../components/TableDetail';
import ViewContainer from '../../../components/ViewContainer';
import BtnFilter from '../../../components/BtnFilter';

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
