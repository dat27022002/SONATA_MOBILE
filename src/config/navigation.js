import Welcome from '../pages/Welcome/Welcome';
import Login from '../pages/Login';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
                navigation.goBack();
            }}
        >
            <Icon name="navicon" size={20} color="#FFFFFF" />
        </TouchableOpacity>
    );
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
];

export default configNavigation;
