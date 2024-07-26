import { StyleSheet } from 'react-native';
import GlobalStyle from '../../config/GlobalStyle';

const ButonCustomStyle = StyleSheet.create({
    btn: { borderRadius: 6, padding: 10 },
    primary: { backgroundColor: GlobalStyle.thirdTextColor },
    medium: { padding: 20 },
    padding20: { paddingHorizontal: 20 },
    bgPrimary: { backgroundColor: GlobalStyle.primaryBackgroudColor },
});

export default ButonCustomStyle;
