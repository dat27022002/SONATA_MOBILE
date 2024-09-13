import { showMessage } from 'react-native-flash-message';

const notify = {
    success: (messeage) => {
        showMessage({
            message: messeage,
            type: 'success',
            style: { borderRadius: 100, padding: 15, alignSelf: 'center', marginTop: 40 },
            position: 'top',
        });
    },
    error: (messeage) => {
        showMessage({
            message: messeage,
            type: 'danger',
            style: { borderRadius: 100, padding: 10, alignSelf: 'center', marginTop: 40 },
            position: 'top',
        });
    },
};

export default notify;
