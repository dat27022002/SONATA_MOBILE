import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import GlobalStyle from '../../config/GlobalStyle';
import styles from './BtnFilterStyle';
import TextDefaut from '../TextDefaut';

const BtnFilter = ({ handleFilter = () => {} }) => {
    return (
        <TouchableOpacity style={styles.btnSearchStore} onPress={handleFilter}>
            <TextDefaut>hyojung</TextDefaut>
            <Icon name="search" style={styles.iconSearch} />
        </TouchableOpacity>
    );
};

export default BtnFilter;
