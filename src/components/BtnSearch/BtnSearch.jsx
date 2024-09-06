import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import GlobalStyle from '../../config/GlobalStyle';
import styles from './BtnSearchStyle';
import TextDefaut from '../TextDefaut';

const BtnSearch = ({ handleSearch }) => {
    const { t } = useTranslation('translation', { keyPrefix: 'ViewData' });

    return (
        <View style={styles.viewSearch}>
            <TouchableOpacity onPress={handleSearch} style={styles.btnSearch}>
                <Icon name="search" color={GlobalStyle.secondnaryTextColor} size={15} />
                <TextDefaut large color={GlobalStyle.secondnaryTextColor}>
                    {t('Search')}
                </TextDefaut>
            </TouchableOpacity>
        </View>
    );
};

export default BtnSearch;
