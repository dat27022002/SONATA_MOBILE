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
    DaySale,
    MonthlySale,
    WeeklySale,
    TimeBase,
    SaleByReceipt,
    SaleByItem,
    ItemRank,
    ApproveElectronicInvoice,
    DetailSalesInvoice,
    RefundHistory,
    OrderCancelList,
    ServiceCenter,
    NFC,
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
    { name: route.ViewData.DAYSALE, component: DaySale, options: configOptionsCommon },
    { name: route.ViewData.MONTHLYSALE, component: MonthlySale, options: configOptionsCommon },
    { name: route.ViewData.WEEKLYSALE, component: WeeklySale, options: configOptionsCommon },
    { name: route.ViewData.TIMEBASE, component: TimeBase, options: configOptionsCommon },
    { name: route.ViewData.SALEBYRECEIPT, component: SaleByReceipt, options: configOptionsCommon },
    { name: route.ViewData.SALEBYITEM, component: SaleByItem, options: configOptionsCommon },
    { name: route.ViewData.ITEMRANK, component: ItemRank, options: configOptionsCommon },
    {
        name: route.ViewData.APPROVEELECTRONICINVOICE,
        component: ApproveElectronicInvoice,
        options: configOptionsCommon,
    },
    { name: route.ViewData.DETAILSALESINVOICE, component: DetailSalesInvoice, options: configOptionsCommon },
    { name: route.ViewData.REFUNDHISTORY, component: RefundHistory, options: configOptionsCommon },
    { name: route.ViewData.ORDERCANCELLIST, component: OrderCancelList, options: configOptionsCommon },
    { name: route.Support.SERVICECENTER, component: ServiceCenter, options: configOptionsCommon },
    { name: route.Support.NFC, component: NFC, options: configOptionsCommon },
];

export default configNavigation;
