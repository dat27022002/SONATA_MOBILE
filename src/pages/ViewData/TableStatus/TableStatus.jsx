import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './TableStatusStyles';
import HeaderSecondnary from '../../../components/HeaderSecondnary';
import imageRequire from '../../../config/ImageRequire';
import TextDefaut from '../../../components/TextDefaut';
import GlobalStyle from '../../../config/GlobalStyle';
import RowTableSummary from '../../../components/RowTableSummary';
import TableDetail from '../../../components/TableDetail';

const TableStatus = () => {
    const { t } = useTranslation();

    const listRowTableDetail = ['Table Name', 'First order', 'Last order', 'Payment amount'];

    return (
        <View style={styles.container}>
            <HeaderSecondnary
                urlImage={imageRequire.TableStatus}
                title={'Table status'}
                iconRight={'reload'}
                line="lineSolidOrange3"
                ionicon
            />
            <View>
                <RowTableSummary title="Orderd tables">
                    <TextDefaut style={{ flex: 1 }}>0</TextDefaut>
                </RowTableSummary>
                <RowTableSummary title="Payment ammount">
                    <TextDefaut style={{ flex: 1 }}>0</TextDefaut>
                </RowTableSummary>
                <RowTableSummary title="Orderd tables">
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <TextDefaut>hyojung</TextDefaut>
                        <Icon name="search" color={GlobalStyle.primaryTextColor} style={{ paddingLeft: 3 }} />
                    </TouchableOpacity>
                </RowTableSummary>
            </View>

            <TableDetail listRow={listRowTableDetail}>
                <View style={{ marginTop: 10 }}>
                    <TextDefaut textAlignCenter> The running table does not exist</TextDefaut>
                </View>
            </TableDetail>
        </View>
    );
};

export default TableStatus;
