import { StyleSheet } from 'react-native';
import GlobalStyle from '../../config/GlobalStyle';

const TableDetail = StyleSheet.create({
    title: {
        paddingHorizontal: GlobalStyle.paddingWidthLayout,
        paddingTop: 30,
        paddingBottom: 10,
        borderBottomColor: GlobalStyle.thirdTextColor,
        borderBottomWidth: 3,
    },
    headerTable: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 6,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBottomColor: GlobalStyle.lineColor,
        borderBottomWidth: 0.5,
    },
    rowTable: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBottomColor: GlobalStyle.lineColor,
        borderBottomWidth: 0.5,
        borderStyle: 'dashed',
    },
    textRowHeader: { textAlign: 'right', color: GlobalStyle.primaryTextColor, fontSize: 12, lineHeight: 14 },
    textSumary: {
        textAlign: 'right',
        fontSize: 12,
        fontWeight: 700,
    },
    viewScroll: { height: 300 },
});

export default TableDetail;
