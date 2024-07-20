import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome6';

import GlobalStyle from '../../config/GlobalStyle';
import styles from './HeaderSecondnaryStyle';
import TextDefaut from '../TextDefaut';

const HeaderSecondnary = ({ iconLeft, iconRight, title, line, ionicon, iconFontAwesome6, handleClickRightBtn }) => {
    let lineStyles = {};
    if (line === 'lineSolidGray3') lineStyles = styles.lineSolidGray3;
    if (line === 'lineDashedGray') lineStyles = styles.lineDashedGray;
    return (
        <View style={[styles.header, lineStyles]}>
            {iconLeft ? <Icon name={iconLeft} size={30} color={GlobalStyle.thirdTextColor} /> : <Image />}

            <TextDefaut style={{ paddingLeft: 10 }}>{title}</TextDefaut>
            <TouchableOpacity style={styles.containerIconRight} onPress={handleClickRightBtn}>
                {ionicon && <Icon name={iconRight} size={25} style={styles.iconReload} />}
                {iconFontAwesome6 && <Icon2 name={iconRight} size={20} style={styles.iconReload} />}
            </TouchableOpacity>
        </View>
    );
};

export default HeaderSecondnary;
