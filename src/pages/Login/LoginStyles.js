import { StyleSheet } from 'react-native';
import GlobalStyle from '../../config/GlobalStyle';

const LoginStyles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyle.primaryBackgroudColor,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        color: GlobalStyle.secondnaryTextColor,
        fontSize: 40,
        fontWeight: '700',
        marginBottom: 110,
        textAlign: 'center',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: GlobalStyle.secondnaryTextColor,
        paddingVertical: 1,
        textAlign: 'center',
        marginBottom: 30,
        color: GlobalStyle.secondnaryTextColor,
    },
    btnLogin: {
        fontWeight: '700',
        paddingHorizontal: 90,
        backgroundColor: '#ffaa01',
        borderRadius: 40,
        paddingVertical: 14,
        color: GlobalStyle.primaryTextColor,
        marginTop: 15,
    },
    containerSave: {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center',
    },
    textSaveID: {
        fontSize: 12,
        color: GlobalStyle.secondnaryTextColor,
    },
});

export default LoginStyles;
