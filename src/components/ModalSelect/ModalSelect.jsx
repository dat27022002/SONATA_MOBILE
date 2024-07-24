import React from 'react';
import { TouchableOpacity, View, Modal, Text } from 'react-native';

import styles from './ModalSelectStyle';

const ModalSelect = ({ isOpen, setIsopen, listOption = [], handleFilter, title }) => {
    const handleClickCancel = () => {
        setIsopen(false);
    };

    const handleClickFilter = (item) => {
        setIsopen(false);
        handleFilter(item);
    };
    return (
        <Modal animationType="fade" transparent={true} visible={isOpen}>
            <View style={styles.centerdView}>
                <View style={styles.innerModal}>
                    <Text style={styles.textTitle}>{title}</Text>
                    <View>
                        {listOption.map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => handleClickFilter(item)}>
                                <Text style={styles.textOption}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View>
                        <TouchableOpacity style={styles.viewBtn} onPress={handleClickCancel}>
                            <Text style={styles.textBtn}>CANCEL</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalSelect;
