import React from 'react';
import { View, TouchableOpacity, FlatList, Linking } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Zocial';

import styles from './ServiceCenterStyles';
import { GlobalStyle, imageRequire } from '../../../config';
import { HeaderSecondnary, IconImage, TextDefaut, ViewContainer } from '../../../components';

const ServiceCenter = () => {
    const { t } = useTranslation();

    const { lineColor } = GlobalStyle;

    const listNumberPhone = [
        { title: 'BC카드', numberPhone: '1588-4000' },
        { title: '하나카드', numberPhone: '1800-1111' },
        { title: '신한카드', numberPhone: '1588-7000' },
        { title: 'NH카드', numberPhone: '1800-4000' },
        { title: '국민카드', numberPhone: '1588-1688' },
        { title: '하나구카드', numberPhone: '1800-1111' },
        { title: '현대카드', numberPhone: '1588-6000' },
        { title: '전북카드', numberPhone: '1588-4477' },
        { title: '삼성카드', numberPhone: '1588-8700' },
        { title: '제주카드', numberPhone: '1588-0079' },
        { title: '롯데카드', numberPhone: '1588-8100' },
        { title: '수협카드', numberPhone: '1588-1515' },
    ];

    const listWebsite = [
        { title: 'UP POS 상세매뉴얼', to: 'http://hyojung.vn/' },
        { title: 'UP CLOUD(ASP)\n상세매뉴얼', to: 'http://hyojung.vn/' },
        { title: 'UP POS 간편매뉴얼\n(테이크아웃)', to: 'http://hyojung.vn/' },
        { title: 'UP CLOUD(ASP)\n기초매뉴얼', to: 'http://hyojung.vn/' },
        { title: 'UP POS 간편매뉴얼\n(홀서빙)', to: 'http://hyojung.vn/' },
        { title: 'ASP 재고매뉴얼', to: 'http://hyojung.vn/' },
    ];

    const handleCall = (phone) => {
        phone = phone.replace('-', '');
        Linking.openURL(`tel:${phone}`);
    };

    const handleOpenWebsite = (url) => {
        Linking.openURL(url);
    };

    const renderItemPhoneNumber = ({ item }) => (
        <View style={styles.itemPhone}>
            <TextDefaut style={styles.itemTitle} color={lineColor}>
                {item.title}
            </TextDefaut>
            <TouchableOpacity onPress={() => handleCall(item.numberPhone)}>
                <TextDefaut color={lineColor}>{item.numberPhone}</TextDefaut>
            </TouchableOpacity>
        </View>
    );

    const renderItemWebsite = ({ item }) => (
        <View style={styles.itemPhone}>
            <IconImage url={imageRequire.UP} />
            <TouchableOpacity onPress={() => handleOpenWebsite(item.to)}>
                <TextDefaut color={lineColor} style={styles.margin_left}>
                    {item.title}
                </TextDefaut>
            </TouchableOpacity>
        </View>
    );

    return (
        <ViewContainer>
            <HeaderSecondnary
                urlImage={imageRequire.ServiceCenter}
                title={'ServiceCenter Information'}
                line="lineSolidGray3"
            />

            {/* A/S Inquiry */}
            <View style={styles.container1}>
                <TextDefaut large>A/S Inquiry</TextDefaut>
                <TextDefaut color={lineColor}>You can get an AS through your agent</TextDefaut>
                <View style={styles.viewHotline}>
                    <Icon name="call" color={lineColor} size={30} />
                    <TouchableOpacity onPress={() => handleCall('1566-4534')}>
                        <TextDefaut xxlarge>1566-4534</TextDefaut>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Card company contact */}
            <View style={styles.container1}>
                <TextDefaut large>Card company contact</TextDefaut>
                <FlatList
                    data={listNumberPhone}
                    renderItem={renderItemPhoneNumber}
                    numColumns={2}
                    columnWrapperStyle={styles.rowList}
                />
            </View>

            {/* Manual */}
            <View style={styles.container2}>
                <TextDefaut large style={styles.textTitle}>
                    Manual
                </TextDefaut>
                <FlatList
                    data={listWebsite}
                    renderItem={renderItemWebsite}
                    numColumns={2}
                    columnWrapperStyle={styles.rowList}
                />
            </View>
        </ViewContainer>
    );
};

export default ServiceCenter;
