/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styles from './LoginStyles';

const Login = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.label}>HJ POS</Text>
                <View style={{ width: 250 }}>
                    <TextInput
                        placeholder="Company ID"
                        placeholderTextColor="#9d9d9d"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="User ID"
                        placeholderTextColor="#9d9d9d"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#9d9d9d"
                        style={styles.input}
                    />
                </View>
                <TouchableOpacity style={{}}>
                    <Text style={styles.btnLogin}>
                        Login
                    </Text>
                </TouchableOpacity>
                <View style={styles.containerSave}>
                    <CheckBox
                        tintColors={{
                            true: '#FFFFFF',
                            false: '#FFFFFF',
                        }}
                    />
                    <Text style={styles.textSaveID}>
                        Save ID and Password
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Login;
