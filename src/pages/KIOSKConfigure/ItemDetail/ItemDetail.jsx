import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import styles from './ItemDetailStyles';
import { GlobalStyle, imageRequire } from '../../../config';
import { HeaderSecondnary, TextDefaut, ViewContainer, ButtonCustom } from '../../../components';
const ItemDetail = ({ route }) => {
    const { t } = useTranslation('translation', { keyPrefix: 'KIOSKConfigure' });

    const [imageUri, setImageUri] = useState(imageRequire.noImageLarge);
    const [isOpenActionImg, setIsOpenActionImg] = useState(false);

    const { inforItem } = route.params;

    const { secondnaryTextColor } = GlobalStyle;

    const handleOpenPopup = () => {
        setIsOpenActionImg(!isOpenActionImg);
    };

    const handleSelectImage = () => {
        launchImageLibrary({}, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode);
            } else {
                const uri = response.assets[0].uri;
                setImageUri({ uri: uri });
                handleOpenPopup();
            }
        });
    };

    const handleCaptureImage = () => {
        launchCamera({}, (response) => {
            if (response.didCancel) {
                console.log('User cancelled camera picker');
            } else if (response.errorCode) {
                console.log('CameraPicker Error: ', response.errorCode);
            } else {
                const uri = response.assets[0].uri;
                handleOpenPopup();
                setImageUri({ uri: uri });
            }
        });
    };

    const handleDeleteImage = () => {
        setImageUri(imageRequire.noImageLarge);
    };
    return (
        <ViewContainer>
            <HeaderSecondnary urlImage={imageRequire.AddItem} title={'KIOSK Item'} line="lineSolidGray" />
            <Image source={imageUri} style={styles.img} />
            {/* inforItem */}
            <View style={styles.viewText}>
                <TextDefaut style={styles.viewlabel}>{t('Category')}</TextDefaut>
                <TextDefaut>{inforItem.name}</TextDefaut>
            </View>
            <View style={styles.viewText}>
                <TextDefaut style={styles.viewlabel}>{t('ItemName')}</TextDefaut>
                <TextDefaut>{inforItem.name}</TextDefaut>
            </View>
            <View style={styles.viewText}>
                <TextDefaut style={styles.viewlabel}>{t('Price')}</TextDefaut>
                <TextDefaut>{inforItem.price}</TextDefaut>
            </View>
            {/* btn Add image */}
            <View style={styles.viewBtnAddImg}>
                <ButtonCustom primary onClick={handleOpenPopup}>
                    {t('AddImage')}
                </ButtonCustom>
            </View>
            {/* popup Add image */}
            {isOpenActionImg && (
                <View style={styles.viewContainerPopup}>
                    <View style={styles.viewPopup}>
                        <TouchableOpacity style={styles.viewBtnActionToImg} onPress={handleCaptureImage}>
                            <Icon name="camera" style={styles.viewIcon} color={secondnaryTextColor} />
                            <TextDefaut large color={secondnaryTextColor}>
                                {t('TakePictures')}
                            </TextDefaut>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.viewBtnActionToImg} onPress={handleSelectImage}>
                            <Icon name="photo" style={styles.viewIcon} color={secondnaryTextColor} />
                            <TextDefaut large color={secondnaryTextColor}>
                                {t('ImportFromAlbum')}
                            </TextDefaut>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.viewBtnActionToImg} onPress={handleDeleteImage}>
                            <Icon name="leaf" style={styles.viewIcon} color={secondnaryTextColor} />
                            <TextDefaut large color={secondnaryTextColor}>
                                {t('DeleteImage')}
                            </TextDefaut>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </ViewContainer>
    );
};

export default ItemDetail;
