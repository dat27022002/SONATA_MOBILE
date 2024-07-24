import React from 'react';
import { View } from 'react-native';

import GlobalStyle from '../../config/GlobalStyle';
import TextDefaut from '../TextDefaut';
import IconImage from '../IconImage';
import imageRequire from '../../config/ImageRequire';
import styles from './ViewSaleCurrentStyle';

const ViewSaleCurrent = ({ title, saleAmount, quantity }) => {
    return (
        <View style={styles.container}>
            <IconImage url={imageRequire.sumaryDetail} medium />
            <TextDefaut bold> {title}</TextDefaut>
            <View style={styles.viewData}>
                <TextDefaut color={GlobalStyle.thirdTextColor} large>
                    {saleAmount}
                </TextDefaut>
                <TextDefaut>{quantity}</TextDefaut>
            </View>
        </View>
    );
};

export default ViewSaleCurrent;
