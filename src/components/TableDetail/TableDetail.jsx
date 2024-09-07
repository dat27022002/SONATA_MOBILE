import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';

import GlobalStyle from '../../config/GlobalStyle';
import TextDefaut from '../TextDefaut';
import styles from './TableDetailStyle';

const TableDetail = ({ data, headerTable = [], noDataContent = '', rowsWidth = [], noSummary = false }) => {
    const { t } = useTranslation('translation', { keyPrefix: 'ViewData' });

    const isData = data.length == 0 ? false : true;
    const listRow = isData ? Object.keys(data[0]) : headerTable;
    const summary = isData ? Object.values(data[0]) : [];
    const dataDetail = data.map((item) => Object.values(item));
    dataDetail.shift();

    const { thirdTextColor, primaryTextColor } = GlobalStyle;

    const styleRows = (index) => ({
        flex: rowsWidth[index] > 0 ? rowsWidth[index] : 1,
    });

    return (
        <View>
            {/* title */}
            <TextDefaut style={styles.title} bold>
                {t('Details')}
            </TextDefaut>

            {/* header table */}
            <View style={styles.headerTable}>
                {listRow.map((item, index) => (
                    <View key={index} style={styleRows(index)}>
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
                            <View key={index} style={styleRows(index)}>
                                <Text
                                    style={[
                                        !noSummary ? styles.textSumary : styles.textRowHeader,
                                        {
                                            color: noSummary
                                                ? primaryTextColor
                                                : index == summary.length - 1
                                                ? thirdTextColor
                                                : primaryTextColor,
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
                                    <View key={index} style={styleRows(index)}>
                                        <Text style={styles.textRowHeader}>{item}</Text>
                                    </View>
                                ))}
                            </View>
                        ))}
                    </ScrollView>
                </React.Fragment>
            ) : (
                <View style={{ marginTop: 10 }}>
                    <TextDefaut textAlignCustom={'center'}>
                        {noDataContent} {t('doesNotExist')}
                    </TextDefaut>
                </View>
            )}
        </View>
    );
};

export default TableDetail;
