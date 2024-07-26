/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { TextDefaut } from '../../../../components';
import { GlobalStyle, imageRequire } from '../../../../config';
import styles from './ItemMenuListStyle';

const ItemMenuList = ({ item }) => {
    const { secondnaryTextColor } = GlobalStyle;
    return (
        <View style={styles.viewItem}>
            <Image source={imageRequire.noImageSmall} style={styles.img} resizeMode="stretch" />
            <TextDefaut>{item.name}</TextDefaut>
            <View style={styles.viewPriceAndEdit}>
                <TextDefaut bold>{item.price}</TextDefaut>
                <TouchableOpacity style={styles.viewBtnEdit}>
                    <Icon name="pencil" size={20} color={secondnaryTextColor} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ItemMenuList;
