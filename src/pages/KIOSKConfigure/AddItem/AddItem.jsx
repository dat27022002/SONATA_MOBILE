import React, { useState } from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

import styles from './AddItemStyles';
import { GlobalStyle, imageRequire, route } from '../../../config';
import { HeaderSecondnary, ViewContainer, TextDefaut } from '../../../components';
import ItemMenuList from './ItemMenuList';
import ItemMenuCard from './ItemMenuCard';

const AddItem = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'KIOSKConfigure' });

    const [typeMenuSelected, setTypeMenuSelected] = useState(0);
    const [formatList, setFormatList] = useState(true);

    const navigation = useNavigation();

    const { thirdTextColor, primaryTextColor } = GlobalStyle;

    const listTypeMenu = ['thịt heo', 'thịt bò', 'thực đơn đặt biệt', 'món phụ', 'đồ uống', 'MEMBERSHIP'];

    handleClickTypeMenu = (item) => {
        setTypeMenuSelected(item);
    };

    const navigateToItemDetail = (item) => {
        navigation.navigate(route.KIOSKConfigure.ITEMDETAIL, { inforItem: item });
    };

    const listMenu = [
        { name: '1 con lon', price: '1200000', image: '' },
        { name: 'bi heo', price: '200000', image: '' },
        { name: 'nua con lon', price: '360000', image: '' },
        { name: 'thit co', price: '1800000', image: '' },
        { name: 'thit ba roi', price: '9200000', image: '' },
        { name: '1 con lon', price: '1200000', image: '' },
        { name: 'bi heo', price: '200000', image: '' },
        { name: 'nua con lon', price: '360000', image: '' },
        { name: 'thit co', price: '1800000', image: '' },
        { name: 'thit ba roi', price: '9200000', image: '' },
        { name: '1 con lon', price: '1200000', image: '' },
        { name: 'bi heo', price: '200000', image: '' },
        { name: 'nua con lon', price: '360000', image: '' },
        { name: 'thit co', price: '1800000', image: '' },
        { name: 'thit ba roi', price: '9200000', image: '' },
    ];

    const renderItemCard = ({ item }) => (
        <TouchableOpacity onPress={() => navigateToItemDetail(item)}>
            <ItemMenuCard item={item} />
        </TouchableOpacity>
    );

    const changeFormat = () => {
        setFormatList(!formatList);
    };

    return (
        <ViewContainer>
            <HeaderSecondnary
                urlImage={imageRequire.AddItem}
                title={t('KIOSKItem')}
                iconRight={formatList ? 'grid' : 'list'}
                line="lineSolidGray"
                ionicon
                handleClickRightBtn={changeFormat}
            />
            <View style={styles.viewListTypeMenu}>
                <ScrollView horizontal>
                    {listTypeMenu.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => handleClickTypeMenu(index)}>
                            <TextDefaut
                                style={[styles.textTypeMenu, index == typeMenuSelected && styles.hinglights]}
                                bold
                                color={index == typeMenuSelected ? thirdTextColor : primaryTextColor}
                            >
                                {item}
                            </TextDefaut>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            {formatList ? (
                <ScrollView>
                    {listMenu.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => navigateToItemDetail(item)}>
                            <ItemMenuList item={item} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            ) : (
                <View style={styles.viewFlatlist}>
                    <FlatList
                        data={listMenu}
                        numColumns={4}
                        key={4}
                        renderItem={renderItemCard}
                        columnWrapperStyle={styles.row}
                    />
                </View>
            )}
        </ViewContainer>
    );
};

export default AddItem;
