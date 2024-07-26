import { StyleSheet } from 'react-native';
import GlobalStyle from '../../../config/GlobalStyle';

const NFCStyles = StyleSheet.create({
    viewBtn: {
        flexDirection: 'row',
        marginTop: 25,
        justifyContent: 'center',
    },
    btnReset: {
        marginRight: 20,
    },
    viewInstruction: {
        backgroundColor: '#fafafa',
        marginTop: 40,
        paddingHorizontal: GlobalStyle.paddingWidthLayout,
        paddingVertical: 20,
    },
    title: {
        marginBottom: 10,
    },
});

export default NFCStyles;
