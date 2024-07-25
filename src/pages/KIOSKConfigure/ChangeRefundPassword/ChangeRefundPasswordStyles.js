import { StyleSheet } from 'react-native';
import GlobalStyle from '../../../config/GlobalStyle';

const ChangeRefundPasswordStyles = StyleSheet.create({
    viewForm: { paddingHorizontal: 50, marginTop: 60 },
    textLabel: { marginBottom: 4 },
    input: {
        borderWidth: 0.5,
        borderColor: GlobalStyle.lineColor,
        paddingVertical: 1,
        marginBottom: 20,
        color: GlobalStyle.primaryTextColor,
        width: '100%',
        height: 30,
    },
    viewBtn: { alignItems: 'center', flex: 1, marginTop: 30 },
});

export default ChangeRefundPasswordStyles;
