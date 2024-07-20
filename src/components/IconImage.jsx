import React from 'react';
import { Image } from 'react-native';

const IconImage = ({ url, small, medium, large, ...props }) => {
    let size = 20;
    if (small) size = 20;
    if (medium) size = 30;
    if (large) size = 40;
    return <Image source={url} style={{ width: size, height: size }} {...props} />;
};

export default IconImage;
