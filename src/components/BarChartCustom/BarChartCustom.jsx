import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/FontAwesome';

import GlobalStyle from '../../config/GlobalStyle';
import TextDefaut from '../TextDefaut';
import styles from './BarChartCustomStyle';

const screenWidth = Dimensions.get('window').width;

const BarChartCustom = ({ dataChart }) => {
    const [isChart, setIsChart] = useState(true);
    const chartConfig = {
        backgroundGradientFrom: GlobalStyle.secondnaryBackgroudColor,
        backgroundGradientTo: GlobalStyle.secondnaryBackgroudColor,
        color: () => GlobalStyle.primaryTextColor,
        strokeWidth: 1, // optional, default 3
        barPercentage: 0.5,
        decimalPlaces: 0,
    };
    handleOpenChart = () => {
        setIsChart(!isChart);
    };
    return (
        <View style={styles.barChart}>
            {/* btn open chart */}
            <View style={styles.viewBtnChart}>
                <TouchableOpacity onPress={handleOpenChart} style={styles.btnChart}>
                    <Icon name={isChart ? 'close' : 'pie-chart'} color={GlobalStyle.secondnaryTextColor} size={15} />
                    <TextDefaut large color={GlobalStyle.secondnaryTextColor}>
                        {isChart ? 'Close' : 'Chart'}
                    </TextDefaut>
                </TouchableOpacity>
            </View>
            {isChart && (
                <ScrollView horizontal>
                    <BarChart
                        style={styles.graphStyle}
                        data={dataChart}
                        width={dataChart.labels.length * 40 < screenWidth ? screenWidth : dataTableDetail.length * 40}
                        height={220}
                        chartConfig={chartConfig}
                        withCustomBarColorFromData
                        fromZero
                        verticalLabelRotation={0}
                    />
                </ScrollView>
            )}
        </View>
    );
};

export default BarChartCustom;
