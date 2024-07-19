/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

const Welcome = (props) => {
    const { t } = useTranslation();
    return (
        <View>
            <Text
                style={{
                    backgroundColor: 'red',
                    fontSize: 35,
                }}
            >
                {t('welcome')}
            </Text>
        </View>
    );
};

export default Welcome;
