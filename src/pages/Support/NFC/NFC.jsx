import React, { useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './NFCStyles';
import { imageRequire } from '../../../config';
import {
    HeaderSecondnary,
    RowTableSummary,
    BtnFilter,
    ViewContainer,
    ButtonCustom,
    TextDefaut,
} from '../../../components';

const NFC = () => {
    const { t } = useTranslation();

    const [table, setTable] = useState('Please select a table');

    const listTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

    const handleChooseTable = (item) => {
        setTable(item);
    };

    return (
        <ViewContainer>
            <HeaderSecondnary urlImage={imageRequire.NFC} title={'UP order tag settings'} line="lineSolidOrange3" />
            <View>
                <RowTableSummary title="Store" sizeRowFirst={100}>
                    <BtnFilter title={'hyojung'} />
                </RowTableSummary>
                <RowTableSummary title="Table name" sizeRowFirst={100}>
                    <BtnFilter
                        title={table}
                        listOptions={listTable}
                        titleModal="Table name"
                        handleFilter={handleChooseTable}
                    />
                </RowTableSummary>
            </View>

            <View style={styles.viewBtn}>
                <View style={styles.btnReset}>
                    <ButtonCustom primary padding20 bgPrimary>
                        Reset
                    </ButtonCustom>
                </View>
                <ButtonCustom primary padding20>
                    Save tag
                </ButtonCustom>
            </View>

            <View style={styles.viewInstruction}>
                <TextDefaut style={styles.title}>How to set up NFC</TextDefaut>
                <TextDefaut>
                    {'Settings > Connection > NFC & Contactless Payments > \nEnabled settings / Basic mode'}
                </TextDefaut>
            </View>
        </ViewContainer>
    );
};

export default NFC;
