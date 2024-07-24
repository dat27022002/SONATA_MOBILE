import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import GlobalStyle from '../../config/GlobalStyle';
import styles from './BtnSearchStyle';
import TextDefaut from '../TextDefaut';

const BtnSearch = ({ handleSearch }) => {
    return (
        <View style={styles.viewSearch}>
            <TouchableOpacity onPress={handleSearch} style={styles.btnSearch}>
                <Icon name="search" color={GlobalStyle.secondnaryTextColor} size={15} />
                <TextDefaut large color={GlobalStyle.secondnaryTextColor}>
                    Search
                </TextDefaut>
            </TouchableOpacity>
        </View>
    );
};

export default BtnSearch;
