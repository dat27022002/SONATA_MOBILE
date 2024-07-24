import React from 'react';
import { View } from 'react-native';
import GlobalStyle from '../config/GlobalStyle';

const ViewContainer = ({ children }) => {
    return (
        <View
            style={{
                backgroundColor: GlobalStyle.secondnaryBackgroudColor,
                width: '100%',
                height: '100%',
            }}
        >
            {children}
        </View>
    );
};

export default ViewContainer;
