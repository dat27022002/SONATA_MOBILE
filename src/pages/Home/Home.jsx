import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import styles from './HomeStyles';
import { GlobalStyle, imageRequire } from '../../config';
import { TextDefaut, HeaderSecondnary, IconImage, Loading } from '../../components';
import {
    getSummarySaleDaily,
    paymentDetail,
    getSaleMonthlySummary,
    summaryMonthlySales,
    getlistStore,
    getlistPOS,
} from './HomeLogic';
import { updatePOSs, updateStores } from '../../redux/dataStoreSlice';

const Home = ({ navigation }) => {
    const { t } = useTranslation('translation', { keyPrefix: 'Home' });

    const dispatch = useDispatch();

    const [dailySalesSummary, setDailySalesSummary] = useState(paymentDetail());
    const [summaryMonthly, setSummaryMonthly] = useState(summaryMonthlySales);
    const [loading, setLoading] = useState(false);
    const [store, setStore] = useState('00001');

    const { primaryTextColor, thirdTextColor } = GlobalStyle;

    useEffect(() => {
        setLoading(true);

        getSummarySaleDaily(store).then((result) => {
            setDailySalesSummary(result);
        });

        getSaleMonthlySummary(store)
            .then((result) => {
                setLoading(false);
                setSummaryMonthly(result);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });

        getlistStore()
            .then((result) => {
                dispatch(updateStores(result));
            })
            .catch((err) => {
                console.log(err);
            });

        getlistPOS()
            .then((result) => {
                dispatch(updatePOSs(result));
            })
            .catch((err) => {
                console.log(err);
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
                    {t('MonthlySales')}
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
                    {t('DailySale')}
                </TextDefaut>
                <View style={{ alignItems: 'flex-end', flex: 1 }}>
                    <TextDefaut color={thirdTextColor}>{dailySalesSummary[4].revenue}</TextDefaut>
                    <TextDefaut>{dailySalesSummary[4].quantity}</TextDefaut>
                </View>
            </View>

            <TextDefaut style={styles.textDailyPayment} bold>
                {t('DailyPaymnetDetail')}
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

            {loading && <Loading />}
        </View>
    );
};

export default Home;
