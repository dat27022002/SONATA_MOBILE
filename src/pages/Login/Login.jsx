import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useTranslation } from 'react-i18next';
import { showMessage, MessageComponent } from 'react-native-flash-message';

import styles from './LoginStyles';
import { Loading } from '../../components';
import { route } from '../../config';
import { getAccounts } from '../../services/searchServices';
import { updateInforUser } from '../../redux/dataStoreSlice';
import notify from '../../utils/notify';

const Login = ({ navigation, ...props }) => {
    const { t } = useTranslation('translation', { keyPrefix: 'Login' });

    const dispatch = useDispatch();

    const [companyId, setCompanyId] = useState('');
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        getAccounts()
            .then((res) => {
                setLoading(false);
                const convertRes = res.map((value) => ({
                    storeCode: value.점포코드,
                    userID: value.사원코드,
                    password: value.비밀번호,
                }));
                const user = convertRes.filter(
                    (value) => value.userID == userId && value.password == password && value.storeCode == companyId,
                );
                if (user.length) {
                    notify.success(t('MesseageLoginSuccess'));
                    user[0].isCEO = false;
                    dispatch(updateInforUser(user[0]));
                    navigation.navigate(route.HOME);
                } else {
                    notify.error(t('MesseageLoginFail'));
                }
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    };

    const handleChangeCompanyID = (text) => {
        setCompanyId(text);
    };

    const handleChangeUserID = (text) => {
        setUserId(text);
    };

    const handleChangePassord = (text) => {
        console.log(text);
        setPassword(text);
    };

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.label}>HJ POS</Text>
                <View style={{ width: 250 }}>
                    <TextInput
                        placeholder={t('CompanyID')}
                        placeholderTextColor="#9d9d9d"
                        style={styles.input}
                        value={companyId}
                        onChangeText={handleChangeCompanyID}
                    />
                    <TextInput
                        placeholder={t('UserID')}
                        placeholderTextColor="#9d9d9d"
                        style={styles.input}
                        value={userId}
                        onChangeText={handleChangeUserID}
                    />
                    <TextInput
                        placeholder={t('Password')}
                        secureTextEntry
                        placeholderTextColor="#9d9d9d"
                        style={styles.input}
                        value={password}
                        onChangeText={handleChangePassord}
                    />
                </View>
                <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.btnLogin}>{t('Login')}</Text>
                </TouchableOpacity>
                <View style={styles.containerSave}>
                    <CheckBox
                        tintColors={{
                            true: '#FFFFFF',
                            false: '#FFFFFF',
                        }}
                    />
                    <Text style={styles.textSaveID}>{t('SaveIdAndPassword')}</Text>
                </View>
            </View>

            {loading && <Loading />}
        </View>
    );
};

const stylesToast = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customContainer: {
        backgroundColor: '#FFD700',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    customText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    customDescription: {
        color: 'black',
        fontSize: 14,
    },
});

export default Login;
