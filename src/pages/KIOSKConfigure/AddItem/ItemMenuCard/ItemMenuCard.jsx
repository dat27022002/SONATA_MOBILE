/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { TextDefaut } from '../../../../components';
import { GlobalStyle, imageRequire } from '../../../../config';
import styles from './ItemMenuCardStyle';

const ItemMenuCard = ({ item }) => {
    const { lineColor } = GlobalStyle;
    return (
        <View style={styles.viewItem}>
            <ImageBackground style={styles.img} source={imageRequire.noImageSmall}>
                <TouchableOpacity style={styles.viewBtnEdit}>
                    <Icon name="pencil" size={20} color={lineColor} />
                </TouchableOpacity>
            </ImageBackground>
            <TextDefaut>{item.name}</TextDefaut>
            <View style={styles.viewPriceAndEdit}>
                <TextDefaut bold>{item.price}</TextDefaut>
            </View>
        </View>
    );
};

export default ItemMenuCard;
