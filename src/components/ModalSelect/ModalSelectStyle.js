import { StyleSheet } from 'react-native';
import { GlobalStyle } from '../../config';

const ModalSelectStyle = StyleSheet.create({
    centerdView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    innerModal: {
        borderRadius: 5,
        overflow: 'hidden',
        width: '80%',
        padding: 20,
        justifyContent: 'center',
        shadowColor: '#000',
        backgroundColor: GlobalStyle.secondnaryBackgroudColor,
    },
    textTitle: { color: GlobalStyle.primaryTextColor, fontSize: 22, fontWeight: '700', paddingBottom: 10 },
    textOption: { color: 'rgba(0,0,0,0.6)', fontSize: 16, paddingVertical: 15 },
    textBtn: { color: GlobalStyle.primaryTextColor, fontSize: 16, fontWeight: '600' },
    viewBtn: { alignItems: 'flex-end' },
});

export default ModalSelectStyle;
