import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome6';

import GlobalStyle from '../../config/GlobalStyle';
import styles from './HeaderSecondnaryStyle';
import TextDefaut from '../TextDefaut';

const HeaderSecondnary = ({
    iconLeft,
    iconRight = false,
    urlImage,
    title,
    line,
    ionicon,
    iconFontAwesome6,
    handleClickRightBtn,
}) => {
    let lineStyles = {};
    if (line === 'lineSolidGray3') lineStyles = styles.lineSolidGray3;
    if (line === 'lineSolidGray') lineStyles = styles.lineSolidGray;
    if (line === 'lineDashedGray') lineStyles = styles.lineDashedGray;
    if (line === 'lineSolidOrange3') lineStyles = styles.lineSolidOrange3;
    return (
        <View style={[styles.header, lineStyles]}>
            {iconLeft ? (
                <Icon name={iconLeft} size={30} color={GlobalStyle.thirdTextColor} />
            ) : (
                <Image source={urlImage} style={{ height: 30, width: 30 }} />
            )}

            <TextDefaut style={{ paddingLeft: 10 }}>{title}</TextDefaut>
            {iconRight && (
                <TouchableOpacity style={styles.containerIconRight} onPress={handleClickRightBtn}>
                    {ionicon && <Icon name={iconRight} size={25} style={styles.iconReload} />}
                    {iconFontAwesome6 && <Icon2 name={iconRight} size={20} style={styles.iconReload} />}
                </TouchableOpacity>
            )}
        </View>
    );
};

export default HeaderSecondnary;
