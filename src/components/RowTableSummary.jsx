import React from 'react';
import { View } from 'react-native';

import GlobalStyle from '../config/GlobalStyle';
import TextDefaut from './TextDefaut';

const RowTableSummary = ({ children, title }) => {
    return (
        <View
            style={[
                {
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                    height: 36,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottomColor: GlobalStyle.lineColor,
                    borderBottomWidth: 0.5,
                },
                { borderStyle: 'dashed' },
            ]}
        >
            <TextDefaut style={{ width: 150 }}>{title}</TextDefaut>
            {children}
        </View>
    );
};

export default RowTableSummary;
