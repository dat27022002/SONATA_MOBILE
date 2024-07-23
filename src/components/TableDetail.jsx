import React from 'react';
import { View } from 'react-native';

import GlobalStyle from '../config/GlobalStyle';
import TextDefaut from './TextDefaut';

const TableDetail = ({ children, listRow }) => {
    return (
        <View>
            <TextDefaut
                style={{
                    paddingHorizontal: GlobalStyle.paddingWidthLayout,
                    paddingTop: 30,
                    paddingBottom: 10,
                    borderBottomColor: GlobalStyle.thirdTextColor,
                    borderBottomWidth: 3,
                }}
                bold
            >
                Details
            </TextDefaut>

            <View
                style={[
                    {
                        flexDirection: 'row',
                        paddingHorizontal: GlobalStyle.paddingWidthLayout,
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderBottomColor: GlobalStyle.lineColor,
                        borderBottomWidth: 0.5,
                    },
                ]}
            >
                {listRow.map((item, index) => (
                    <TextDefaut key={index}>{item}</TextDefaut>
                ))}
            </View>
            {children}
        </View>
    );
};

export default TableDetail;
