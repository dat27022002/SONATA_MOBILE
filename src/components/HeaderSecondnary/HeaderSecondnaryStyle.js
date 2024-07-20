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
        paddingHorizontal: 20,
        alignItems: 'center',
        height: 50,
    },
    iconReload: { color: GlobalStyle.lineColor, flex: 1, textAlign: 'right' },
    lineSolidGray3: {
        borderBottomColor: GlobalStyle.lineColor,
        borderBottomWidth: 3,
    },
});

export default HeaderSecondnary;
