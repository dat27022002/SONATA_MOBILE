import { StyleSheet } from 'react-native';
import GlobalStyle from '../../../config/GlobalStyle';

const TableStatusStyles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyle.secondnaryBackgroudColor,
        width: '100%',
        height: '100%',
    },
    dateRangePicker: { flexDirection: 'row', flex: 1, alignItems: 'center' },
    btnSearchStore: { flex: 1, flexDirection: 'row', alignItems: 'center' },
});

export default TableStatusStyles;
