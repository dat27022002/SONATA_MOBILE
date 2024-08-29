import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import GlobalStyle from '../../config/GlobalStyle';
import TextDefaut from '../TextDefaut';
import styles from './TableDetailStyle';

const TableDetail = ({ data, headerTable = [], noDataContent = '' }) => {
    const isData = data.length == 0 ? false : true;
    const listRow = isData ? Object.keys(data[0]) : headerTable;
    const summary = isData ? Object.values(data[0]) : [];
    summary[0] = 'Total Amount';
    const dataDetail = data.map((item) => Object.values(item));
    dataDetail.shift();

    const { thirdTextColor, primaryTextColor } = GlobalStyle;

    return (
        <View>
            {/* title */}
            <TextDefaut style={styles.title} bold>
                Details
            </TextDefaut>

            {/* header table */}
            <View style={styles.headerTable}>
                {listRow.map((item, index) => (
                    <View key={index} style={{ flex: index == 0 ? 1.2 : 1 }}>
                        <Text style={styles.textRowHeader}>{item}</Text>
                    </View>
                ))}
            </View>
            {/* test if there is data */}
            {isData ? (
                <React.Fragment>
                    {/* row summary */}
                    <View style={styles.rowTable}>
                        {summary.map((item, index) => (
                            <View key={index} style={{ flex: index == 0 ? 1.2 : 1 }}>
                                <Text
                                    style={[
                                        styles.textSumary,
                                        {
                                            color: index == summary.length - 1 ? thirdTextColor : primaryTextColor,
                                        },
                                    ]}
                                >
                                    {item}
                                </Text>
                            </View>
                        ))}
                    </View>
                    {/* row data */}
                    <ScrollView style={styles.viewScroll}>
                        {dataDetail.map((row, index) => (
                            <View key={index} style={styles.rowTable}>
                                {row.map((item, index) => (
                                    <View key={index} style={{ flex: index == 0 ? 1.2 : 1 }}>
                                        <Text style={styles.textRowHeader}>{item}</Text>
                                    </View>
                                ))}
                            </View>
                        ))}
                    </ScrollView>
                </React.Fragment>
            ) : (
                <View style={{ marginTop: 10 }}>
                    <TextDefaut textAlignCustom={'center'}> {noDataContent} does not exist</TextDefaut>
                </View>
            )}
        </View>
    );
};

export default TableDetail;
