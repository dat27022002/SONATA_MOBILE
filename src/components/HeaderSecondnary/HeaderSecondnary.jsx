/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import GlobalStyle from '../../config/GlobalStyle';
import styles from './HeaderSecondnaryStyle';
import TextDefaut from '../TextDefaut';

const HeaderSecondnary = ({ iconLeft, iconRight, title, line, ...props }) => {
    let lineStyles = {};
    if (line === 'lineSolidGray3') lineStyles = styles.lineSolidGray3;
    return (
        <View style={[styles.header, lineStyles]}>
            {iconLeft ? <Icon name={iconLeft} size={30} color={GlobalStyle.thirdTextColor} /> : <Image />}

            <TextDefaut style={{ paddingLeft: 10 }}>{title}</TextDefaut>
            <Icon name={iconRight} size={25} style={styles.iconReload} />
        </View>
    );
};

export default HeaderSecondnary;
