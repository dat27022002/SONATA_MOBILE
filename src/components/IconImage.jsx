import React from 'react';
import { Image } from 'react-native';

const IconImage = ({ url, small, medium, large, sizeCustom, ...props }) => {
    let size = 20;
    if (small) size = 20;
    if (medium) size = 30;
    if (large) size = 35;
    if (sizeCustom) size = sizeCustom;
    return <Image source={url} style={{ width: size, height: size }} {...props} />;
};

export default IconImage;
