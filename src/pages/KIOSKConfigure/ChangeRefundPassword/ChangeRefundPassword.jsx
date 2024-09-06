import React, { useState } from 'react';
import { View, TextInput, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './ChangeRefundPasswordStyles';
import { imageRequire } from '../../../config';
import { HeaderSecondnary, TextDefaut, ViewContainer, ButtonCustom } from '../../../components';

const ChangeRefundPassword = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'KIOSKConfigure' });

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
                title={t('ChangeRefundPassword')}
                line="lineSolidGray"
            />
            <View style={styles.viewForm}>
                <TextDefaut style={styles.textLabel}>{t('Password')}</TextDefaut>
                <TextInput
                    style={styles.input}
                    value={formData.password}
                    onChangeText={(text) => handleChange('password', text)}
                    secureTextEntry
                />
                <TextDefaut style={styles.textLabel}>{t('NewPassword')}</TextDefaut>
                <TextInput
                    style={styles.input}
                    value={formData.newPassword}
                    onChangeText={(text) => handleChange('newPassword', text)}
                    secureTextEntry
                />
                <TextDefaut style={styles.textLabel}>{t('ReenterNewPassword')}</TextDefaut>
                <TextInput
                    style={styles.input}
                    value={formData.newPasswordRepeat}
                    onChangeText={(text) => handleChange('newPasswordRepeat', text)}
                    secureTextEntry
                />
            </View>
            <View style={styles.viewBtn}>
                <ButtonCustom primary medium onClick={onSubmit}>
                    {t('ChangePassword')}
                </ButtonCustom>
            </View>
        </ViewContainer>
    );
};

export default ChangeRefundPassword;
