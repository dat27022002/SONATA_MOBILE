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
import ModalDatePicker from '../../../components/ModalDatePicker';
import IconImage from '../../../components/IconImage';

const DaySale = () => {
    const { t } = useTranslation();

    const today = new Date();

    const todayFormat = getFormatedDate(today, 'YYYY/MM/DD');
    const [date, setDate] = useState(todayFormat);

    const [isOpenStart, setIsOpenStart] = useState(false);
    const [startDate, setStartDate] = useState(todayFormat);
    const [isOpenEnd, setIsOpenEnd] = useState(false);
    const [endDate, setEndDate] = useState(todayFormat);

    const dataTableDetail = [
        { Date: '2024-07-08', Quantity: 1, Guest: 2, 'Customer price': '12.960', 'Sales amount': '12960' },
        { Date: '2024-07-08', Quantity: 1, Guest: 2, 'Customer price': '12.960', 'Sales amount': '12960' },
        { Date: '2024-07-08', Quantity: 1, Guest: 2, 'Customer price': '12.960', 'Sales amount': '12960' },
    ];

    const handlePopupStartDate = () => {
        setIsOpenStart(!isOpenStart);
    };

    const handlePopupEndDate = () => {
        setIsOpenEnd(!isOpenEnd);
    };

    const handleChangeDate = (date) => {
        setDate(date);
    };

    const handleChangeStartDate = () => {
        setStartDate(date);
        setIsOpenStart(!isOpenStart);
    };

    const handleChangeEndDate = () => {
        setEndDate(date);
        setIsOpenEnd(!isOpenEnd);
    };

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
                <RowTableSummary
                    title="Term"
                    sizeRowFirst={100}
                    style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}
                >
                    <TouchableOpacity onPress={handlePopupStartDate}>
                        <TextDefaut>{startDate}</TextDefaut>
                    </TouchableOpacity>
                    <Icon name="calendar" />
                    <TextDefaut>~</TextDefaut>
                    <TouchableOpacity onPress={handlePopupEndDate}>
                        <TextDefaut>{endDate}</TextDefaut>
                    </TouchableOpacity>
                    <Icon name="calendar" />
                </RowTableSummary>
                <RowTableSummary title="Store" sizeRowFirst={100}>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <TextDefaut>hyojung</TextDefaut>
                        <Icon name="search" color={GlobalStyle.primaryTextColor} style={{ paddingLeft: 3 }} />
                    </TouchableOpacity>
                </RowTableSummary>
            </View>
            <View
                style={{
                    marginVertical: GlobalStyle.paddingWidthLayout,
                    alignItems: 'flex-end',
                    paddingEnd: GlobalStyle.paddingWidthLayout,
                }}
            >
                <TouchableOpacity
                    onPress={() => {}}
                    style={{
                        backgroundColor: GlobalStyle.thirdTextColor,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: 4,
                        paddingHorizontal: 10,
                        borderRadius: 6,
                    }}
                >
                    <Icon name="search" color={GlobalStyle.secondnaryTextColor} size={15} />
                    <TextDefaut large color={GlobalStyle.secondnaryTextColor}>
                        Search
                    </TextDefaut>
                </TouchableOpacity>
            </View>

            <View
                style={{
                    backgroundColor: '#eff8fd',
                    paddingHorizontal: GlobalStyle.paddingWidthLayout,
                    flexDirection: 'row',
                    height: 50,
                    alignItems: 'center',
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    borderColor: GlobalStyle.lineColor,
                }}
            >
                <IconImage url={imageRequire.sumaryDetail} medium />
                <TextDefaut bold> Day sales</TextDefaut>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <TextDefaut color={GlobalStyle.thirdTextColor} large>
                        0
                    </TextDefaut>
                    <TextDefaut>0</TextDefaut>
                </View>
            </View>

            <TableDetail data={dataTableDetail} />

            <ModalDatePicker
                isOpen={isOpenStart}
                handleChangeDate={handleChangeDate}
                handleOpenModal={handlePopupStartDate}
                dateSelected={startDate}
                handleChangeDateUI={handleChangeStartDate}
            />
            <ModalDatePicker
                isOpen={isOpenEnd}
                handleChangeDate={handleChangeDate}
                handleOpenModal={handlePopupEndDate}
                dateSelected={endDate}
                handleChangeDateUI={handleChangeEndDate}
            />
        </View>
    );
};

export default DaySale;
