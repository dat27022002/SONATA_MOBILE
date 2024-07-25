import { StyleSheet } from 'react-native';
import GlobalStyle from '../../../config/GlobalStyle';

const BarcodeScanStyles = StyleSheet.create({
    viewBarcodeMain: {
        height: 180,
        width: '100%',
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textRefundSolid: {
        color: GlobalStyle.secondnaryTextColor,
        fontSize: 18,
        fontWeight: '700',
    },
    textInstruction: { color: GlobalStyle.secondnaryTextColor, fontWeight: '500' },
    line: {
        height: 5,
        width: '100%',
        backgroundColor: GlobalStyle.thirdTextColor,
    },
    viewSecondnary: {
        width: 150,
        height: 100,
        backgroundColor: GlobalStyle.secondnaryBackgroudColor,
        borderColor: GlobalStyle.lineColor,
        borderWidth: 0.8,
        marginTop: 20,
        marginLeft: GlobalStyle.paddingWidthLayout,
        borderRadius: 6,
        padding: 4,
    },
    ViewInner: {
        width: '100%',
        height: '100%',
        backgroundColor: GlobalStyle.thirdTextColor,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textRefund: {
        color: GlobalStyle.secondnaryTextColor,
        fontSize: 18,
        fontWeight: '400',
    },
    viewIconBarcode: {
        backgroundColor: GlobalStyle.secondnaryBackgroudColor,
        padding: 2,
        position: 'absolute',
        left: 6,
        top: 6,
        borderRadius: 2,
    },
});

export default BarcodeScanStyles;
