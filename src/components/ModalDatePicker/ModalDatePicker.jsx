import React from 'react';
import { TouchableOpacity, View, Modal } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';

import GlobalStyle from '../../config/GlobalStyle';
import styles from './ModalDatePickerStyle';
import TextDefaut from '../TextDefaut';

const ModalDatePicker = ({ isOpen, handleChangeDate, handleOpenModal, dateSelected, handleChangeDateUI }) => {
    return (
        <Modal animationType="fade" transparent={true} visible={isOpen}>
            <View style={styles.centerdView}>
                <View style={styles.modalView}>
                    <DatePicker mode="calendar" selected={dateSelected} onSelectedChange={handleChangeDate} />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={handleOpenModal}>
                            <TextDefaut bold large color={GlobalStyle.thirdTextColor}>
                                Cancel
                            </TextDefaut>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={handleChangeDateUI}>
                            <TextDefaut bold large color={GlobalStyle.thirdTextColor}>
                                OK
                            </TextDefaut>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalDatePicker;
