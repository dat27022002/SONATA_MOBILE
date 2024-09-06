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
    const { t } = useTranslation('translation', { keyPrefix: 'Support' });

    const [table, setTable] = useState('Please select a table');

    const listTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

    const handleChooseTable = (item) => {
        setTable(item);
    };

    return (
        <ViewContainer>
            <HeaderSecondnary urlImage={imageRequire.NFC} title={t('UPOrderTagSettings')} line="lineSolidOrange3" />
            <View>
                <RowTableSummary title={t('Store')} sizeRowFirst={100}>
                    <BtnFilter title={'hyojung'} />
                </RowTableSummary>
                <RowTableSummary title={t('TableName')} sizeRowFirst={100}>
                    <BtnFilter
                        title={table}
                        listOptions={listTable}
                        titleModal={t('TableName')}
                        handleFilter={handleChooseTable}
                    />
                </RowTableSummary>
            </View>

            <View style={styles.viewBtn}>
                <View style={styles.btnReset}>
                    <ButtonCustom primary padding20 bgPrimary>
                        {t('Reset')}
                    </ButtonCustom>
                </View>
                <ButtonCustom primary padding20>
                    {t('SaveTag')}
                </ButtonCustom>
            </View>

            <View style={styles.viewInstruction}>
                <TextDefaut style={styles.title}>{t('HowToSetUpNFC')}</TextDefaut>
                <TextDefaut>{t('SettingConnectionNFC')}</TextDefaut>
            </View>
        </ViewContainer>
    );
};

export default NFC;
