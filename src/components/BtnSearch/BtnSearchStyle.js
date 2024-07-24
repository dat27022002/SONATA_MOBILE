import { StyleSheet } from 'react-native';
import GlobalStyle from '../../config/GlobalStyle';

const BtnSearch = StyleSheet.create({
    viewSearch: {
        marginVertical: 10,
        alignItems: 'flex-end',
        paddingEnd: GlobalStyle.paddingWidthLayout,
    },
    btnSearch: {
        backgroundColor: GlobalStyle.thirdTextColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 6,
    },
});

export default BtnSearch;
