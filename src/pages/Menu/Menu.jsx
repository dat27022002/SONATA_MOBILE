import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import styles from './MenuStyles';
import { TextDefaut, HeaderSecondnary, IconImage, ModalSelect } from '../../components';
import { listMenuConfig, listSupport, listMenuSearchData } from './constant';
import { route, listLanguage } from '../../config';
import { updateInforUser, updatePOSs, updateStores } from '../../redux/dataStoreSlice';

const Menu = ({ navigation }) => {
    const { t, i18n } = useTranslation('translation', { keyPrefix: 'Menu' });

    const [isModalLanguage, setIsModalLanguage] = useState(false);

    const { stores } = useSelector((state) => state.dataStore);

    const dispatch = useDispatch();

    const handleClickItemMenu = (screenName) => {
        const routeNames = navigation.getState().routeNames;
        if (screenName == route.Support.LANGUAGE) {
            setIsModalLanguage(true);
            return;
        }
        if (routeNames.includes(screenName)) {
            navigation.navigate(screenName);
        } else {
            Alert.alert('Item Pressed', `You pressed ${screenName}, but this page not exist`);
        }
    };

    const handleChangeLanguage = (item) => {
        i18n.changeLanguage(listLanguage[item]);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                handleClickItemMenu(item.to);
            }}
        >
            <View style={styles.containerItem}>
                <IconImage url={item.icon} large />
                <TextDefaut style={{ marginBottom: 20 }} small textAlignCustom={'center'}>
                    {item.name}
                </TextDefaut>
            </View>
        </TouchableOpacity>
    );

    const handleClickRightBtn = () => {
        dispatch(updateInforUser({}));
        dispatch(updatePOSs([]));
        dispatch(updateStores([]));
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <HeaderSecondnary
                iconLeft={'location'}
                title={stores[0]?.storeName}
                iconRight={'arrow-right-to-bracket'}
                line="lineDashedGray"
                iconFontAwesome6
                handleClickRightBtn={handleClickRightBtn}
            />
            <View style={[styles.containerList, { height: 225 }]}>
                <FlatList
                    data={listMenuSearchData()}
                    renderItem={renderItem}
                    numColumns={4}
                    columnWrapperStyle={styles.row}
                />
            </View>

            <View style={styles.containertextConfig}>
                <TextDefaut large>{t('KIOSKConfigure')}</TextDefaut>
            </View>

            <View style={[styles.containerList, { height: 155 }]}>
                <FlatList
                    data={listMenuConfig()}
                    renderItem={renderItem}
                    numColumns={4}
                    columnWrapperStyle={styles.row}
                />
            </View>
            <View style={styles.support}>
                <View style={{ height: 70 }}>
                    <FlatList
                        data={listSupport()}
                        renderItem={renderItem}
                        numColumns={4}
                        columnWrapperStyle={styles.row}
                    />
                </View>
            </View>

            <ModalSelect
                isOpen={isModalLanguage}
                setIsopen={setIsModalLanguage}
                listOption={Object.keys(listLanguage)}
                title={'language'}
                handleFilter={handleChangeLanguage}
            />
        </View>
    );
};

export default Menu;
