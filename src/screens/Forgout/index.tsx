import React from 'react';
import { View, Text, TextInput} from 'react-native';

import { ButtonFourgout } from '../../components/ButtonForgout';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export function Forgout() {
    const navigation = useNavigation();

    function handleLogin() {
        navigation.navigate('Login');
      }

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <Text style={styles.subtitle}>
                Insira o e-mail</Text>
                <Text style={styles.subtitle}>
                    cadastrado
                </Text>
            </View>

            <View style={styles.content}>
                <TextInput 
                    placeholder='E-mail ou Telefone'
                    style={styles.input}
                    placeholderTextColor="#FFF"
                />

                <Text style={styles.register} onPress={(handleLogin)}>
                    Já possui uma conta? Login
                </Text>

                <ButtonFourgout 
                    title="Próximo" 
                    activeOpacity={0.8}
                />

            </View>

        </View>
    );
}