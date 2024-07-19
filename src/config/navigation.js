import Welcome from '../pages/Welcome/Welcome';
import Login from '../pages/Login';

const configNavigation = [
    {
        name: 'Login',
        component: Login,
        options: { headerShown: false },
    },
    {
        name: 'Welcome',
        component: Welcome,
    },
];

export default configNavigation;
