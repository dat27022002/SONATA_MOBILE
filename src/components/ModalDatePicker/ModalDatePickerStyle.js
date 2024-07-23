import { StyleSheet } from 'react-native';

const ModalDatePicker = StyleSheet.create({
    centerdView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    modalView: {
        borderRadius: 20,
        overflow: 'hidden',
        margin: 20,
        backgroundColor: 'aqua',
        width: '90%',
        alignItems: 'center',
        shadowColor: '#000',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        backgroundColor: '#ffffff',
        paddingRight: 20,
    },
    button: {
        paddingVertical: 15,
        paddingLeft: 30,
    },
});

export default ModalDatePicker;
