import React, { useState } from 'react';
import { View, TextInput, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './ChangeRefundPasswordStyles';
import { GlobalStyle, imageRequire } from '../../../config';
import { HeaderSecondnary, TextDefaut, ViewContainer, ButtonCustom } from '../../../components';

const ChangeRefundPassword = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({ password: '', newPassword: '', newPasswordRepeat: '' });

    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = () => {
        Alert.alert('Change password', JSON.stringify(formData));
    };

    return (
        <ViewContainer>
            <HeaderSecondnary
                urlImage={imageRequire.ChangeRefundPassword}
                title={'Change refund password'}
                line="lineSolidGray"
            />
            <View style={styles.viewForm}>
                <TextDefaut style={styles.textLabel}>Password</TextDefaut>
                <TextInput
                    style={styles.input}
                    value={formData.password}
                    onChangeText={(text) => handleChange('password', text)}
                    secureTextEntry
                />
                <TextDefaut style={styles.textLabel}>New password</TextDefaut>
                <TextInput
                    style={styles.input}
                    value={formData.newPassword}
                    onChangeText={(text) => handleChange('newPassword', text)}
                    secureTextEntry
                />
                <TextDefaut style={styles.textLabel}>Re-enter new password</TextDefaut>
                <TextInput
                    style={styles.input}
                    value={formData.newPasswordRepeat}
                    onChangeText={(text) => handleChange('newPasswordRepeat', text)}
                    secureTextEntry
                />
            </View>
            <View style={styles.viewBtn}>
                <ButtonCustom primary medium onClick={onSubmit}>
                    Change Password
                </ButtonCustom>
            </View>
        </ViewContainer>
    );
};

export default ChangeRefundPassword;
