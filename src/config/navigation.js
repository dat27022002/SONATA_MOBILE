import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome6';
import route from './route';
import {
    Home,
    Login,
    Menu,
    Welcome,
    TableStatus,
    DaySale,
    MonthlySale,
    WeeklySale,
    TimeBase,
    SaleByReceipt,
    SaleByItem,
    ItemRank,
    CreditCardApproval,
    CashReceiptApproval,
    RefundHistory,
    OrderCancelList,
    RealTimeSale,
    InventoryStatus,
    BarcodeScan,
    ChangeRefundPassword,
    ChangeAdminPassword,
    PrinterPaper,
} from '../pages';

const configHeaderTitle = {
    title: 'HJ POS',
    headerStyle: {
        backgroundColor: '#444243',
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
};

const customButtonGoToMenu = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate(route.MENU);
            }}
        >
            <Icon name="navicon" size={20} color="#FFFFFF" />
        </TouchableOpacity>
    );
};

const customButtonGoToHome = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.goBack();
            }}
        >
            <Icon2 name="house-chimney" size={20} color="#FFFFFF" />
        </TouchableOpacity>
    );
};

const customButtonGoToBack = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.goBack();
            }}
            style={{ width: 25 }}
        >
            <Icon name="angle-left" size={28} color="#FFFFFF" />
        </TouchableOpacity>
    );
};

const configOptionsCommon = {
    ...configHeaderTitle,
    headerLeft: customButtonGoToBack,
};

const configNavigation = [
    {
        name: route.LOGIN,
        component: Login,
        options: { headerShown: false },
    },
    {
        name: route.WELCOME,
        component: Welcome,
        options: {
            ...configHeaderTitle,
            headerLeft: customButtonGoToMenu,
        },
    },
    {
        name: route.HOME,
        component: Home,
        options: {
            ...configHeaderTitle,
            headerLeft: customButtonGoToMenu,
        },
    },
    {
        name: route.MENU,
        component: Menu,
        options: {
            ...configHeaderTitle,
            headerLeft: customButtonGoToHome,
        },
    },
    { name: route.ViewData.TABLESTATUS, component: TableStatus, options: configOptionsCommon },
    { name: route.ViewData.DAYSALE, component: DaySale, options: configOptionsCommon },
    { name: route.ViewData.MONTHLYSALE, component: MonthlySale, options: configOptionsCommon },
    { name: route.ViewData.WEEKLYSALE, component: WeeklySale, options: configOptionsCommon },
    { name: route.ViewData.TIMEBASE, component: TimeBase, options: configOptionsCommon },
    { name: route.ViewData.SALEBYRECEIPT, component: SaleByReceipt, options: configOptionsCommon },
    { name: route.ViewData.SALEBYITEM, component: SaleByItem, options: configOptionsCommon },
    { name: route.ViewData.ITEMRANK, component: ItemRank, options: configOptionsCommon },
    { name: route.ViewData.CREDITCARDAPPROVAL, component: CreditCardApproval, options: configOptionsCommon },
    { name: route.ViewData.CASHRECEIPTAPPROVAL, component: CashReceiptApproval, options: configOptionsCommon },
    { name: route.ViewData.REFUNDHISTORY, component: RefundHistory, options: configOptionsCommon },
    { name: route.ViewData.ORDERCANCELLIST, component: OrderCancelList, options: configOptionsCommon },
    { name: route.ViewData.REALTIMESALE, component: RealTimeSale, options: configOptionsCommon },
    { name: route.ViewData.INVENTORYSTATUS, component: InventoryStatus, options: configOptionsCommon },
    { name: route.KIOSKConfigure.BARCODESCAN, component: BarcodeScan, options: configOptionsCommon },
    { name: route.KIOSKConfigure.CHANGEREFUNDPASSWORD, component: ChangeRefundPassword, options: configOptionsCommon },
    { name: route.KIOSKConfigure.CHANGEADMINPASSWORD, component: ChangeAdminPassword, options: configOptionsCommon },
    { name: route.KIOSKConfigure.PRINTERPAPER, component: PrinterPaper, options: configOptionsCommon },
];

export default configNavigation;
