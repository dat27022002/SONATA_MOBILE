import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome';

import HeaderSecondnary from '../../../components/HeaderSecondnary';
import imageRequire from '../../../config/ImageRequire';
import TextDefaut from '../../../components/TextDefaut';
import GlobalStyle from '../../../config/GlobalStyle';
import RowTableSummary from '../../../components/RowTableSummary';
import TableDetail from '../../../components/TableDetail';
import ViewContainer from '../../../components/ViewContainer';

const TableStatus = () => {
    const { t } = useTranslation();

    // const listRowTableDetail = ['Table Name', 'First order', 'Last order', 'Payment amount'];

    const dataTableDetail = [
        { Date: '2024-07-08', Quantity: 1, Guest: 2, 'Customer price': '12.960', 'Sales amount': '12960' },
        { Date: '2024-07-08', Quantity: 1, Guest: 2, 'Customer price': '12.960', 'Sales amount': '12960' },
        { Date: '2024-07-08', Quantity: 1, Guest: 2, 'Customer price': '12.960', 'Sales amount': '12960' },
    ];

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
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TextDefaut>hyojung</TextDefaut>
                        <Icon name="search" color={GlobalStyle.primaryTextColor} style={{ paddingLeft: 3 }} />
                    </TouchableOpacity>
                </RowTableSummary>
            </View>

            <TableDetail data={dataTableDetail} />
        </ViewContainer>
    );
};

export default TableStatus;
