import React from 'react';
import { View } from 'react-native';

import GlobalStyle from '../config/GlobalStyle';
import TextDefaut from './TextDefaut';

const RowTableSummary = ({ children, title, sizeRowFirst, ...propsColum2 }) => {
    return (
        <View
            style={[
                {
                    flexDirection: 'row',
                    paddingHorizontal: GlobalStyle.paddingWidthLayout,
                    height: 36,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottomColor: GlobalStyle.lineColor,
                    borderBottomWidth: 0.5,
                },
                { borderStyle: 'dashed' },
            ]}
        >
            <TextDefaut style={{ width: sizeRowFirst ? sizeRowFirst : 150 }}>{title}</TextDefaut>
            <View style={{ flex: 1, justifyContent: 'center' }} {...propsColum2}>
                {children}
            </View>
        </View>
    );
};

export default RowTableSummary;
