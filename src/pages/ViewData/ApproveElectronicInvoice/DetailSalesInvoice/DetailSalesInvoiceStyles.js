import { StyleSheet } from 'react-native';
import GlobalStyle from '../../../../config/GlobalStyle';

const CashReceiptApprovalStyles = StyleSheet.create({
    containerScrollView: { backgroundColor: '#eff6ff', height: 480, paddingTop: 20, marginTop: 10, paddingBottom: 40 },
    ViewDetailSales: {
        paddingHorizontal: 20,
    },
    styleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 7,
        borderBottomColor: GlobalStyle.lineColor,
        borderBottomWidth: 0.5,
        borderStyle: 'dashed',
    },
    styleCell: { color: 'black', overflow: 'hidden', fontSize: 12 },
});

export default CashReceiptApprovalStyles;
