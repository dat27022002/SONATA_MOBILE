import { StyleSheet } from 'react-native';
import GlobalStyle from '../../config/GlobalStyle';

const MenuStyles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyle.secondnaryBackgroudColor,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    flatList: {
        flexGrow: 1,
    },
    row: {
        flex: 1,
        justifyContent: 'start',
        spacing: 10,
    },
    containerItem: { height: 60, width: 75, alignItems: 'center', marginHorizontal: 2, marginVertical: 3 },
    containertextConfig: {
        width: '100%',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    containerList: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        marginTop: 20,
        borderBottomColor: GlobalStyle.lineColor,
        borderBottomWidth: 0.5,
        borderStyle: 'dashed',
    },
    support: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        marginTop: 20,
        width: '100%',
    },
});

export default MenuStyles;
