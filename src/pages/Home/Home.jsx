import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './HomeStyles';
import { GlobalStyle, imageRequire } from '../../config';
import { TextDefaut, HeaderSecondnary, IconImage } from '../../components';
import { getSummaeySaleDaily, paymentDetail, getSaleMonthlySummary, summaryMonthlySales } from './HomeLogic';

const Home = ({ navigation }) => {
    const { t } = useTranslation();

    const [dailySalesSummary, setDailySalesSummary] = useState(paymentDetail);
    const [summaryMonthly, setSummaryMonthly] = useState(summaryMonthlySales);

    const { primaryTextColor, thirdTextColor } = GlobalStyle;

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        console.log('today', formattedDate);
        getSummaeySaleDaily(formattedDate).then((result) => {
            setDailySalesSummary(result);
        });

        getSaleMonthlySummary(2024, 8).then((result) => {
            setSummaryMonthly(result);
        });
    }, []);

    return (
        <View style={styles.container}>
            <HeaderSecondnary
                iconLeft={'location'}
                title={'hyojung'}
                iconRight={'reload'}
                line="lineSolidGray3"
                ionicon
            />
            {/* Monthly Sales */}
            <View style={styles.containerSummary}>
                <IconImage url={imageRequire.MonthlySale} medium />
                <TextDefaut style={{ paddingLeft: 5 }} bold>
                    Monthly Sales
                </TextDefaut>
                <View style={{ alignItems: 'flex-end', flex: 1 }}>
                    <TextDefaut color={thirdTextColor}>{summaryMonthly.revenue}</TextDefaut>
                    <TextDefaut>{summaryMonthly.quantity}</TextDefaut>
                </View>
            </View>

            {/* Daily Sales */}
            <View style={styles.containerSummary2}>
                <IconImage url={imageRequire.DaySale} medium />
                <TextDefaut style={{ paddingLeft: 5 }} bold>
                    Daily Sales
                </TextDefaut>
                <View style={{ alignItems: 'flex-end', flex: 1 }}>
                    <TextDefaut color={thirdTextColor}>{dailySalesSummary[4].revenue}</TextDefaut>
                    <TextDefaut>{dailySalesSummary[4].quantity}</TextDefaut>
                </View>
            </View>

            <TextDefaut style={styles.textDailyPayment} bold>
                Daily payment detail
            </TextDefaut>
            {/* Daily payment detail */}
            {dailySalesSummary.map((payment, index) => (
                <View
                    key={index}
                    style={[
                        styles.itemPayment,
                        { borderStyle: index == paymentDetail.length - 1 ? 'solid' : 'dashed' },
                    ]}
                >
                    <TextDefaut style={{ width: 105 }}>{payment.type}</TextDefaut>
                    <TextDefaut style={{ width: 105 }}>{payment.quantity}</TextDefaut>
                    <TextDefaut
                        style={{ width: 65 }}
                        color={index == paymentDetail.length - 1 ? thirdTextColor : primaryTextColor}
                        textAlignCustom="right"
                    >
                        {payment.revenue}
                    </TextDefaut>
                </View>
            ))}
        </View>
    );
};

export default Home;
