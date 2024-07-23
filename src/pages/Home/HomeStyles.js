import { StyleSheet } from 'react-native';
import GlobalStyle from '../../config/GlobalStyle';

const HomeStyles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyle.secondnaryBackgroudColor,
        width: '100%',
        height: '100%',
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: GlobalStyle.paddingWidthLayout,
        alignItems: 'center',
        height: 50,
        borderBottomColor: GlobalStyle.lineColor,
        borderBottomWidth: 3,
    },
    iconReload: { color: GlobalStyle.lineColor, flex: 1, textAlign: 'right' },
    containerSummary: {
        flexDirection: 'row',
        paddingHorizontal: GlobalStyle.paddingWidthLayout,
        alignItems: 'center',
        height: 90,
        borderBottomColor: GlobalStyle.lineColor,
        borderBottomWidth: 0.5,
        borderStyle: 'dashed',
    },
    containerSummary2: {
        flexDirection: 'row',
        paddingHorizontal: GlobalStyle.paddingWidthLayout,
        alignItems: 'center',
        height: 90,
        borderBottomColor: GlobalStyle.lineColor,
        borderBottomWidth: 0.5,
    },
    textDailyPayment: {
        paddingHorizontal: GlobalStyle.paddingWidthLayout,
        paddingTop: 50,
        paddingBottom: 10,
        borderBottomColor: GlobalStyle.lineColor,
        borderBottomWidth: 3,
    },
    itemPayment: {
        flexDirection: 'row',
        paddingHorizontal: GlobalStyle.paddingWidthLayout,
        height: 36,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: GlobalStyle.lineColor,
        borderBottomWidth: 0.5,
    },
});

export default HomeStyles;
