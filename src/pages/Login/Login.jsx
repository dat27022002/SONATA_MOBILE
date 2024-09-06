import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useTranslation } from 'react-i18next';

import styles from './LoginStyles';
import { route } from '../../config';

const Login = ({ navigation, ...props }) => {
    const { t } = useTranslation('translation', { keyPrefix: 'Login' });

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.label}>HJ POS</Text>
                <View style={{ width: 250 }}>
                    <TextInput placeholder={t('CompanyID')} placeholderTextColor="#9d9d9d" style={styles.input} />
                    <TextInput placeholder={t('UserID')} placeholderTextColor="#9d9d9d" style={styles.input} />
                    <TextInput placeholder={t('Password')} placeholderTextColor="#9d9d9d" style={styles.input} />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(route.HOME);
                    }}
                >
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
        </View>
    );
};

export default Login;
