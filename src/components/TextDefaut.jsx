/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';

import GlobalStyle from '../config/GlobalStyle';

const TextDefaut = ({ bold, color, small, large, children, textAlignCenter, ...props }) => {
    return (
        <View {...props}>
            <Text
                style={{
                    color: color ? color : GlobalStyle.primaryTextColor,
                    fontWeight: bold ? '700' : '400',
                    fontSize: small ? 9 : large ? 16 : 12,
                    textAlign: 'center',
                    textAlign: textAlignCenter && 'center',
                }}
            >
                {children}
            </Text>
        </View>
    );
};

export default TextDefaut;
