import { StyleSheet } from 'react-native';
import GlobalStyle from '../../config/GlobalStyle';

const HeaderSecondnary = StyleSheet.create({
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
    },
    iconReload: { color: GlobalStyle.lineColor, textAlign: 'right' },
    containerIconRight: {
        flex: 1,
        justifyContent: 'center',
    },
    lineSolidGray3: {
        borderBottomColor: GlobalStyle.lineColor,
        borderBottomWidth: 3,
    },
    lineDashedGray: {
        borderBottomColor: GlobalStyle.lineColor,
        borderBottomWidth: 0.5,
        borderStyle: 'dashed',
    },
    lineSolidOrange3: {
        borderBottomColor: GlobalStyle.thirdTextColor,
        borderBottomWidth: 3,
    },
});

export default HeaderSecondnary;
