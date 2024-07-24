import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getFormatedDate } from 'react-native-modern-datepicker';

import styles from './DaySaleStyles';
import HeaderSecondnary from '../../../components/HeaderSecondnary';
import imageRequire from '../../../config/ImageRequire';
import TextDefaut from '../../../components/TextDefaut';
import GlobalStyle from '../../../config/GlobalStyle';
import RowTableSummary from '../../../components/RowTableSummary';
import TableDetail from '../../../components/TableDetail';
import IconImage from '../../../components/IconImage';
import DateRangePicker from '../../../components/DateRangePicker';
import BtnSearch from '../../../components/BtnSearch';
import ViewSaleCurrent from '../../../components/ViewSaleCurrent';

const DaySale = () => {
    const { t } = useTranslation();

    const today = new Date();

    const todayFormat = getFormatedDate(today, 'YYYY/MM/DD');
    const [startDate, setStartDate] = useState(todayFormat);
    const [endDate, setEndDate] = useState(todayFormat);

    const handleSearch = () => {};
    const dataTableDetail = [
        { Date: '2024-07-08', Quantity: 1, Guest: 2, 'Customer price': '12.960', 'Sales amount': '12960' },
        { Date: '2024-07-08', Quantity: 1, Guest: 2, 'Customer price': '12.960', 'Sales amount': '12960' },
        { Date: '2024-07-08', Quantity: 1, Guest: 2, 'Customer price': '12.960', 'Sales amount': '12960' },
    ];

    return (
        <View style={styles.container}>
            <HeaderSecondnary
                urlImage={imageRequire.DaySale}
                title={'Day sales list'}
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
                    <TouchableOpacity style={styles.btnSearchStore}>
                        <TextDefaut>hyojung</TextDefaut>
                        <Icon name="search" style={styles.iconSearch} />
                    </TouchableOpacity>
                </RowTableSummary>
            </View>

            <BtnSearch handleSearch={handleSearch} />

            <ViewSaleCurrent title={'Day sales'} saleAmount={0} quantity={0} />

            <TableDetail data={dataTableDetail} />
        </View>
    );
};

export default DaySale;
