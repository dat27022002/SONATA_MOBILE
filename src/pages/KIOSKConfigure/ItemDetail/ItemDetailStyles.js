import { StyleSheet } from 'react-native';
import GlobalStyle from '../../../config/GlobalStyle';

const ItemDetailStyles = StyleSheet.create({
    img: { width: '100%', height: 200 },
    viewText: {
        flexDirection: 'row',
        paddingHorizontal: GlobalStyle.paddingWidthLayout,
        paddingVertical: 12,
        alignItems: 'center',
        borderBottomColor: GlobalStyle.lineColor,
        borderBottomWidth: 0.5,
        borderStyle: 'dashed',
    },
    viewlabel: { width: 100 },
    viewBtnAddImg: { alignItems: 'center', marginTop: 20 },
    viewContainerPopup: { position: 'absolute', bottom: 0, alignItems: 'center', width: '100%' },
    viewPopup: {
        paddingVertical: 10,
        paddingHorizontal: 70,
        borderRadius: 8,
        backgroundColor: GlobalStyle.primaryTextColor,
    },
    viewBtnActionToImg: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    viewIcon: {
        marginEnd: 10,
    },
});

export default ItemDetailStyles;
