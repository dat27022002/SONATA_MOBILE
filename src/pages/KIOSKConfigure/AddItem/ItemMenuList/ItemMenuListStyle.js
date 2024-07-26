import { StyleSheet } from 'react-native';
import GlobalStyle from '../../../../config/GlobalStyle';

const { lineColor } = GlobalStyle;

const AddItemStyles = StyleSheet.create({
    viewItem: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 0.5,
        borderStyle: 'dashed',
        borderColor: lineColor,
        alignItems: 'center',
    },
    img: { width: 70, height: 50, marginEnd: 20 },
    viewPriceAndEdit: { flex: 1, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center' },
    viewBtnEdit: {
        backgroundColor: lineColor,
        paddingHorizontal: 3,
        paddingVertical: 2,
        borderRadius: 2,
        marginStart: 4,
    },
});

export default AddItemStyles;
