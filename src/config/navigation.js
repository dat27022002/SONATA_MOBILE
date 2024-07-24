import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome6';
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
                navigation.navigate('Menu');
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
        name: 'Login',
        component: Login,
        options: { headerShown: false },
    },
    {
        name: 'Welcome',
        component: Welcome,
        options: {
            ...configHeaderTitle,
            headerLeft: customButtonGoToMenu,
        },
    },
    {
        name: 'Home',
        component: Home,
        options: {
            ...configHeaderTitle,
            headerLeft: customButtonGoToMenu,
        },
    },
    {
        name: 'Menu',
        component: Menu,
        options: {
            ...configHeaderTitle,
            headerLeft: customButtonGoToHome,
        },
    },
    { name: 'TableStatus', component: TableStatus, options: configOptionsCommon },
    { name: 'DaySale', component: DaySale, options: configOptionsCommon },
    { name: 'MonthlySale', component: MonthlySale, options: configOptionsCommon },
    { name: 'WeeklySale', component: WeeklySale, options: configOptionsCommon },
    { name: 'TimeBase', component: TimeBase, options: configOptionsCommon },
    { name: 'SaleByReceipt', component: SaleByReceipt, options: configOptionsCommon },
    { name: 'SaleByItem', component: SaleByItem, options: configOptionsCommon },
    { name: 'ItemRank', component: ItemRank, options: configOptionsCommon },
    { name: 'CreditCardApproval', component: CreditCardApproval, options: configOptionsCommon },
    { name: 'CashReceiptApproval', component: CashReceiptApproval, options: configOptionsCommon },
    { name: 'RefundHistory', component: RefundHistory, options: configOptionsCommon },
    { name: 'OrderCancelList', component: OrderCancelList, options: configOptionsCommon },
    { name: 'RealTimeSale', component: RealTimeSale, options: configOptionsCommon },
    { name: 'InventoryStatus', component: InventoryStatus, options: configOptionsCommon },
];

export default configNavigation;
