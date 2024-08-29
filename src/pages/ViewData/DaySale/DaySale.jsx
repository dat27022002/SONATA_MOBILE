import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from 'react-native-modern-datepicker';

import styles from './DaySaleStyles';
import { GlobalStyle, imageRequire } from '../../../config';
import {
    HeaderSecondnary,
    RowTableSummary,
    TableDetail,
    DateRangePicker,
    BtnSearch,
    ViewSaleCurrent,
    BarChartCustom,
    BtnFilter,
    ViewContainer,
} from '../../../components';

const DaySale = () => {
    const { t } = useTranslation();

    const today = new Date();

    const todayFormat = getFormatedDate(today, 'YYYY-MM-DD');
    const [startDate, setStartDate] = useState(todayFormat);
    const [endDate, setEndDate] = useState(todayFormat);
    const [dataTableDetail, setDataTableDetail] = useState([]);
    const [dataTableDetailChart, setDataTableDetailChart] = useState([]);

    const headerTable = ['Date', 'Quantity', 'Guest', 'Customer price', 'Sales amount'];

    const dataChart = {
        labels: dataTableDetailChart.slice(1).map((item) => item.Date.substring(5)),
        datasets: [
            {
                data: dataTableDetailChart.slice(1).map((item) => item['Sales amount']),
                colors: dataTableDetailChart.slice(1).map(() => () => GlobalStyle.thirdTextColor),
            },
        ],
    };

    const formatNumber = (number) => {
        return new Intl.NumberFormat('en-US').format(number);
    };

    const handleSearch = () => {
        axios
            .get(`https://sonata-gmfycwecdkcnafey.eastus-01.azurewebsites.net/api/My/${startDate}/${endDate}`)
            .then((response) => {
                const data = response.data;
                const result = data.reduce((acc, curr) => {
                    const date = curr.day.split('T')[0]; // Lấy ngày mà không lấy phần thời gian
                    if (!acc[date]) {
                        acc[date] = { Date: date, Quantity: 0, Guest: 0, 'Customer price': 0, 'Sales amount': 0 };
                    }
                    acc[date].Quantity += 1;
                    acc[date].Guest += 1;
                    acc[date]['Sales amount'] += curr.saleAmount;
                    return acc;
                }, {});

                const resultArray = Object.values(result);
                // Sắp xếp mảng theo thứ tự ngày
                resultArray.sort((a, b) => new Date(a.Date) - new Date(b.Date));

                // Tính tổng cho tất cả các ngày
                const total = resultArray.reduce(
                    (acc, curr) => {
                        acc.Quantity += curr.Quantity;
                        acc.Guest += curr.Guest;
                        acc['Customer price'] += curr['Customer price'];
                        acc['Sales amount'] += curr['Sales amount'];
                        return acc;
                    },
                    { Date: '', Quantity: 0, Guest: 0, 'Customer price': 0, 'Sales amount': 0 },
                );
                // Thêm hàng tổng vào đầu mảng kết quả
                resultArray.unshift(total);

                setDataTableDetailChart(resultArray);

                const formatResultArray = resultArray.map((value) => ({
                    ...value,
                    'Sales amount': formatNumber(value['Sales amount']),
                }));

                setDataTableDetail(formatResultArray);

                console.log('hello', JSON.stringify(resultArray, null, 2));
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        handleSearch();
    }, []);

    return (
        <ViewContainer>
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
                    <BtnFilter title={'hyojung'} />
                </RowTableSummary>
            </View>

            <BtnSearch handleSearch={handleSearch} />

            <ViewSaleCurrent title={'Day sales'} saleAmount={0} quantity={0} />

            <TableDetail data={dataTableDetail} headerTable={headerTable} />

            {/* chart */}
            <BarChartCustom dataChart={dataChart} />
        </ViewContainer>
    );
};

export default DaySale;
