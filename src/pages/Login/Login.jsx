import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useTranslation } from 'react-i18next';

import styles from './LoginStyles';

const Login = ({ navigation, ...props }) => {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.label}>HJ POS</Text>
                <View style={{ width: 250 }}>
                    <TextInput placeholder="Company ID" placeholderTextColor="#9d9d9d" style={styles.input} />
                    <TextInput placeholder="User ID" placeholderTextColor="#9d9d9d" style={styles.input} />
                    <TextInput placeholder="Password" placeholderTextColor="#9d9d9d" style={styles.input} />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                >
                    <Text style={styles.btnLogin}>{t('login')}</Text>
                </TouchableOpacity>
                <View style={styles.containerSave}>
                    <CheckBox
                        tintColors={{
                            true: '#FFFFFF',
                            false: '#FFFFFF',
                        }}
                    />
                    <Text style={styles.textSaveID}>Save ID and Password</Text>
                </View>
            </View>
        </View>
    );
};

export default Login;
