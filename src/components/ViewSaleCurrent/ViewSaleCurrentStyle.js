import { StyleSheet } from 'react-native';
import GlobalStyle from '../../config/GlobalStyle';

const ViewSummary = StyleSheet.create({
    container: {
        backgroundColor: '#eff8fd',
        paddingHorizontal: GlobalStyle.paddingWidthLayout,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: GlobalStyle.lineColor,
        borderBottomColor: GlobalStyle.lineColor,
    },
    viewData: { flex: 1, alignItems: 'flex-end' },
});

export default ViewSummary;
