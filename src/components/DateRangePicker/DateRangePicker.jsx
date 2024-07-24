import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from 'react-native-modern-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

import TextDefaut from '../TextDefaut';
import ModalDatePicker from '../ModalDatePicker';

const DateRangePicker = ({ startDate, setStartDate, endDate, setEndDate, isNotEndCalendar = false }) => {
    const { t } = useTranslation();

    const today = new Date();

    const todayFormat = getFormatedDate(today, 'YYYY/MM/DD');
    const [date, setDate] = useState(todayFormat);

    const [isOpenStart, setIsOpenStart] = useState(false);
    const [isOpenEnd, setIsOpenEnd] = useState(false);

    const handlePopupStartDate = () => {
        setIsOpenStart(!isOpenStart);
    };

    const handlePopupEndDate = () => {
        setIsOpenEnd(!isOpenEnd);
    };

    const handleChangeDate = (date) => {
        setDate(date);
    };

    const handleChangeStartDate = () => {
        setStartDate(date);
        setIsOpenStart(!isOpenStart);
    };

    const handleChangeEndDate = () => {
        setEndDate(date);
        setIsOpenEnd(!isOpenEnd);
    };

    return (
        <React.Fragment>
            <TouchableOpacity onPress={handlePopupStartDate}>
                <TextDefaut>{startDate}</TextDefaut>
            </TouchableOpacity>
            <Icon name="calendar" />
            {!isNotEndCalendar && (
                <React.Fragment>
                    <TextDefaut>~</TextDefaut>
                    <TouchableOpacity onPress={handlePopupEndDate}>
                        <TextDefaut>{endDate}</TextDefaut>
                    </TouchableOpacity>
                    <Icon name="calendar" />
                </React.Fragment>
            )}

            <ModalDatePicker
                isOpen={isOpenStart}
                handleChangeDate={handleChangeDate}
                handleOpenModal={handlePopupStartDate}
                dateSelected={startDate}
                handleChangeDateUI={handleChangeStartDate}
            />
            {!isNotEndCalendar && (
                <ModalDatePicker
                    isOpen={isOpenEnd}
                    handleChangeDate={handleChangeDate}
                    handleOpenModal={handlePopupEndDate}
                    dateSelected={endDate}
                    handleChangeDateUI={handleChangeEndDate}
                />
            )}
        </React.Fragment>
    );
};

export default DateRangePicker;
