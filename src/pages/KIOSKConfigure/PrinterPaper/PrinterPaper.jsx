import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './PrinterPaperStyles';
import { imageRequire } from '../../../config';
import { HeaderSecondnary, TextDefaut, ViewContainer } from '../../../components';

const PrinterPaper = () => {
    const { t } = useTranslation();

    return (
        <ViewContainer>
            <HeaderSecondnary
                urlImage={imageRequire.PrinterPaper}
                title={'Print paper notification'}
                line="lineSolidGray"
                iconFontAwesome
                iconRight="bell-o"
                textRight="0"
            />
            <View style={styles.containter}>
                <TextDefaut>No notification history</TextDefaut>
            </View>
        </ViewContainer>
    );
};

export default PrinterPaper;
