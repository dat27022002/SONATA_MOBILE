/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';

import GlobalStyle from '../config/GlobalStyle';

const TextDefaut = ({ bold, color, small, large, xxlarge, children, textAlignCustom, ...props }) => {
    return (
        <View {...props}>
            <Text
                style={{
                    color: color ? color : GlobalStyle.primaryTextColor,
                    fontWeight: bold ? '700' : '400',
                    fontSize: small ? 9 : large ? 16 : xxlarge ? 30 : 12,
                    textAlign: textAlignCustom ? textAlignCustom : 'left',
                }}
            >
                {children}
            </Text>
        </View>
    );
};

export default TextDefaut;
