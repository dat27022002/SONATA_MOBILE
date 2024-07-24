import { StyleSheet } from 'react-native';
import GlobalStyle from '../../config/GlobalStyle';

const BtnFilter = StyleSheet.create({
    btnSearchStore: { flex: 1, flexDirection: 'row', alignItems: 'center' },
    iconSearch: { color: GlobalStyle.primaryTextColor, paddingStart: 3 },
});

export default BtnFilter;
