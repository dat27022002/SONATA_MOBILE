import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './BtnFilterStyle';
import TextDefaut from '../TextDefaut';

const BtnFilter = ({ handleFilter = () => {}, title }) => {
    return (
        <TouchableOpacity style={styles.btnSearchStore} onPress={handleFilter}>
            <TextDefaut>{title}</TextDefaut>
            <Icon name="search" style={styles.iconSearch} />
        </TouchableOpacity>
    );
};

export default BtnFilter;
