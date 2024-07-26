import { StyleSheet } from 'react-native';
import GlobalStyle from '../../../../config/GlobalStyle';

const { secondnaryTextColor } = GlobalStyle;

const ItemMenuCardStyles = StyleSheet.create({
    viewItem: {
        alignItems: 'center',
        marginHorizontal: 4,
        marginBottom: 12,
        width: 80,
        borderRadius: 4,
        overflow: 'hidden',
    },
    img: { width: '100%', height: 50 },
    viewPriceAndEdit: { flex: 1, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center' },
    viewBtnEdit: {
        position: 'absolute',
        right: 5,
        bottom: 5,
        backgroundColor: secondnaryTextColor,
        paddingHorizontal: 3,
        paddingVertical: 2,
        borderRadius: 2,
    },
});

export default ItemMenuCardStyles;
