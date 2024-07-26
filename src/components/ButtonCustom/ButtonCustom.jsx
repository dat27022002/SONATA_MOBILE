import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './ButonCustomStyle';
import TextDefaut from '../TextDefaut';
import { GlobalStyle } from '../../config';

const ButtonCustom = ({ onClick, children, primary, medium, padding20, bgPrimary, ...props }) => {
    return (
        <TouchableOpacity
            onPress={onClick}
            style={[
                styles.btn,
                primary && styles.primary,
                medium && styles.medium,
                padding20 && styles.padding20,
                bgPrimary && styles.bgPrimary,
            ]}
            {...props}
        >
            <TextDefaut
                color={primary ? GlobalStyle.secondnaryTextColor : GlobalStyle.primaryTextColor}
                large={primary}
                bold={primary}
            >
                {children}
            </TextDefaut>
        </TouchableOpacity>
    );
};

export default ButtonCustom;
