import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './HomeStyles';
import GlobalStyle from '../../config/GlobalStyle';
import TextDefaut from '../../components/TextDefaut';
import HeaderSecondnary from '../../components/HeaderSecondnary';
import IconImage from '../../components/IconImage';
import imageRequire from '../../config/ImageRequire';

const Home = ({ navigation }) => {
    const { t } = useTranslation();

    const paymentDetail = [
        { type: 'Cash', quantity: 0, revenue: 0 },
        { type: 'Cash Receipts', quantity: 0, revenue: 0 },
        { type: 'Credit Card', quantity: 0, revenue: 0 },
        { type: 'Other Payments', quantity: 0, revenue: 0 },
        { type: 'Total', quantity: 0, revenue: 0 },
    ];

    const { primaryTextColor, thirdTextColor } = GlobalStyle;

    return (
        <View style={styles.container}>
            <HeaderSecondnary
                iconLeft={'location'}
                title={'hyojung'}
                iconRight={'reload'}
                line="lineSolidGray3"
                ionicon
            />

            <View style={styles.containerSummary}>
                <IconImage url={imageRequire.MonthlySale} medium />
                <TextDefaut style={{ paddingLeft: 5 }} bold>
                    Monthly Sales
                </TextDefaut>
                <View style={{ alignItems: 'flex-end', flex: 1 }}>
                    <TextDefaut color={thirdTextColor}>160.73.760</TextDefaut>
                    <TextDefaut>0</TextDefaut>
                </View>
            </View>

            <View style={styles.containerSummary2}>
                <IconImage url={imageRequire.DaySale} medium />
                <TextDefaut style={{ paddingLeft: 5 }} bold>
                    Daily Sales
                </TextDefaut>
                <View style={{ alignItems: 'flex-end', flex: 1 }}>
                    <TextDefaut color={thirdTextColor}>0</TextDefaut>
                    <TextDefaut>0</TextDefaut>
                </View>
            </View>

            <TextDefaut style={styles.textDailyPayment} bold>
                Daily payment detail
            </TextDefaut>

            {paymentDetail.map((payment, index) => (
                <View
                    key={index}
                    style={[
                        styles.itemPayment,
                        { borderStyle: index == paymentDetail.length - 1 ? 'solid' : 'dashed' },
                    ]}
                >
                    <TextDefaut style={{ width: 105 }}>{payment.type}</TextDefaut>
                    <TextDefaut style={{ width: 105 }}>{payment.quantity}</TextDefaut>
                    <TextDefaut color={index == paymentDetail.length - 1 ? thirdTextColor : primaryTextColor}>
                        {payment.revenue}
                    </TextDefaut>
                </View>
            ))}
        </View>
    );
};

export default Home;
