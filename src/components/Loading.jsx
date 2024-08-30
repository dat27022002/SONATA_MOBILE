import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { GlobalStyle } from '../config';

const Loading = ({}) => {
    return (
        <View
            style={{
                position: 'absolute',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ActivityIndicator size="large" color={GlobalStyle.thirdTextColor} />
        </View>
    );
};

export default Loading;
