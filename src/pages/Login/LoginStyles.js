import { StyleSheet } from 'react-native';

const LoginStyles = StyleSheet.create({
    container: {
        backgroundColor: '#444243',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        color: '#FFFFFF',
        fontSize: 40,
        fontWeight: '700',
        marginBottom: 110,
        textAlign: 'center',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#FFFFFF',
        paddingVertical: 1,
        textAlign: 'center',
        marginBottom: 30,
        color: '#FFFFFF',
    },
    btnLogin: {
        fontWeight: '700',
        paddingHorizontal: 90,
        backgroundColor: '#ffaa01',
        borderRadius: 40,
        paddingVertical: 14,
        color: '#333333',
        marginTop: 15,
    },
    containerSave: {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center',
    },
    textSaveID: {
        fontSize: 12,
        color: '#FFFFFF',
    },
});

export default LoginStyles;
