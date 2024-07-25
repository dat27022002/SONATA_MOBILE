import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './BarcodeScanStyles';
import { GlobalStyle, imageRequire } from '../../../config';
import { HeaderSecondnary, ViewContainer } from '../../../components';

const BarcodeScan = () => {
    const { t } = useTranslation();

    const { thirdTextColor, secondnaryTextColor } = GlobalStyle;

    return (
        <ViewContainer>
            <HeaderSecondnary urlImage={imageRequire.BarcodeScan} title={'Barcode scan'} line="lineSolidGray" />
            <View style={styles.viewBarcodeMain}>
                <Text style={styles.textRefundSolid}>Refund</Text>
                <Icon name="barcode" color={secondnaryTextColor} size={100} />
                <Text style={styles.textInstruction}>Let me machin scan the barcode</Text>
            </View>

            <View style={styles.line}></View>

            <View style={styles.viewSecondnary}>
                <View style={styles.ViewInner}>
                    <View style={styles.viewIconBarcode}>
                        <Icon name="barcode" color={thirdTextColor} />
                    </View>
                    <Text style={styles.textRefund}>Refund</Text>
                </View>
            </View>
        </ViewContainer>
    );
};

export default BarcodeScan;
