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
        height: 45,
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
    lineSolidGray: { borderBottomColor: GlobalStyle.lineColor, borderBottomWidth: 0.5 },
    lineDashedGray: {
        borderBottomColor: GlobalStyle.lineColor,
        borderBottomWidth: 0.5,
        borderStyle: 'dashed',
    },
    lineSolidOrange3: {
        borderBottomColor: GlobalStyle.thirdTextColor,
        borderBottomWidth: 3,
    },
    textRight: {
        backgroundColor: GlobalStyle.thirdTextColor,
        paddingHorizontal: 7,
        textAlign: 'center',
        borderRadius: 4,
        color: GlobalStyle.secondnaryTextColor,
        fontSize: 16,
        marginLeft: 4,
    },
});

export default HeaderSecondnary;
