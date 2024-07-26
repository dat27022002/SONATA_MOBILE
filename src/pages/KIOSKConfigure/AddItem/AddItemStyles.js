import { StyleSheet } from 'react-native';
import GlobalStyle from '../../../config/GlobalStyle';

const AddItemStyles = StyleSheet.create({
    viewListTypeMenu: { borderBottomWidth: 0.5, borderBottomColor: GlobalStyle.lineColor },
    textTypeMenu: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    hinglights: {
        borderBottomColor: GlobalStyle.thirdTextColor,
        borderBottomWidth: 3,
    },
    viewFlatlist: { alignItems: 'center', marginTop: 10 },
    row: {
        flex: 1,
        justifyContent: 'start',
    },
});

export default AddItemStyles;
