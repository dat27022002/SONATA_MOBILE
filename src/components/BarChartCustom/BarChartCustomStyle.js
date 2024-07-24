import { StyleSheet } from 'react-native';
import GlobalStyle from '../../config/GlobalStyle';

const BarChartCustom = StyleSheet.create({
    barChart: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        width: '100%',
    },
    viewBtnChart: {
        alignItems: 'flex-end',
        paddingEnd: GlobalStyle.paddingWidthLayout,
        flex: 1,
        width: '100%',
    },
    btnChart: {
        backgroundColor: GlobalStyle.thirdTextColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 6,
    },
    graphStyle: {
        alignItems: 'center',
        backgroundColor: 'aqua',
        borderTopWidth: 2,
        width: '100%',
        borderTopColor: GlobalStyle.thirdTextColor,
        backgroundColor: GlobalStyle.secondnaryBackgroudColor,
        paddingTop: 10,
        overflow: 'scroll',
    },
});

export default BarChartCustom;
