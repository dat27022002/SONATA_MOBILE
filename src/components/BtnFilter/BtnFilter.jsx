import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './BtnFilterStyle';
import TextDefaut from '../TextDefaut';
import ModalSelect from '../ModalSelect';

const BtnFilter = ({ handleFilter = () => {}, title, listOptions = [], titleModal = '' }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        if (listOptions.length <= 1) return;
        setIsOpen(!isOpen);
    };
    return (
        <React.Fragment>
            <TouchableOpacity style={styles.btnSearchStore} onPress={handleOpenModal}>
                <TextDefaut>{title}</TextDefaut>
                <Icon name="search" style={styles.iconSearch} />
            </TouchableOpacity>
            <ModalSelect
                isOpen={isOpen}
                setIsopen={setIsOpen}
                listOption={listOptions}
                handleFilter={handleFilter}
                title={titleModal}
            />
        </React.Fragment>
    );
};

export default BtnFilter;
