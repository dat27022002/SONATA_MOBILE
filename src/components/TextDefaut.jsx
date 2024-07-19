/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';

import GlobalStyle from '../config/GlobalStyle';

const TextDefaut = ({ bold, color, children, ...props }) => {
    return (
        <View {...props}>
            <Text
                style={{
                    color: color ? color : GlobalStyle.primaryTextColor,
                    fontWeight: bold ? '700' : '400',
                    fontSize: 12,
                }}
            >
                {children}
            </Text>
        </View>
    );
};

export default TextDefaut;
