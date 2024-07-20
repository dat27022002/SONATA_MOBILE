import React from 'react';
import { View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './MenuStyles';
import TextDefaut from '../../components/TextDefaut';
import HeaderSecondnary from '../../components/HeaderSecondnary';
import IconImage from '../../components/IconImage';
import { listMenuConfig, listSupport, listMenuSearchData } from './constant';

const Menu = ({ navigation }) => {
    const { t } = useTranslation();

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                Alert.alert('Item Pressed', `You pressed ${item.name}`);
            }}
        >
            <View style={styles.containerItem}>
                <IconImage url={item.icon} large />
                <TextDefaut style={{ marginBottom: 20 }} small>
                    {item.name}
                </TextDefaut>
            </View>
        </TouchableOpacity>
    );

    const handleClickRightBtn = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <HeaderSecondnary
                iconLeft={'location'}
                title={'hyojung'}
                iconRight={'arrow-right-to-bracket'}
                line="lineDashedGray"
                iconFontAwesome6
                handleClickRightBtn={handleClickRightBtn}
            />
            <View style={[styles.containerList, { height: 280 }]}>
                <FlatList
                    data={listMenuSearchData}
                    renderItem={renderItem}
                    numColumns={4}
                    columnWrapperStyle={styles.row}
                />
            </View>

            <View style={styles.containertextConfig}>
                <TextDefaut large>KIOSK Configure</TextDefaut>
            </View>

            <View style={[styles.containerList, { height: 150 }]}>
                <FlatList
                    data={listMenuConfig}
                    renderItem={renderItem}
                    numColumns={4}
                    columnWrapperStyle={styles.row}
                />
            </View>
            <View style={styles.support}>
                <View style={{ height: 60 }}>
                    <FlatList
                        data={listSupport}
                        renderItem={renderItem}
                        numColumns={4}
                        columnWrapperStyle={styles.row}
                    />
                </View>
            </View>
        </View>
    );
};

export default Menu;
