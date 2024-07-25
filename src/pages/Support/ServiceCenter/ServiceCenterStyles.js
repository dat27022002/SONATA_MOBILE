import { StyleSheet } from 'react-native';
import GlobalStyle from '../../../config/GlobalStyle';

const ServiceCenterStyles = StyleSheet.create({
    container1: {
        paddingHorizontal: GlobalStyle.paddingWidthLayout,
        paddingVertical: 20,
        justifyContent: 'center',
        borderBottomColor: GlobalStyle.lineColor,
        borderBottomWidth: 0.5,
        borderStyle: 'dashed',
    },
    container2: {
        paddingHorizontal: GlobalStyle.paddingWidthLayout,
        paddingVertical: 20,
        justifyContent: 'center',
    },
    viewHotline: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
    },
    rowList: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    itemPhone: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center',
        marginEnd: 40,
        width: 130,
    },
    itemTitle: {
        width: 60,
    },
    textTitle: {
        marginBottom: 10,
    },
    margin_left: {
        marginLeft: 10,
    },
});

export default ServiceCenterStyles;
