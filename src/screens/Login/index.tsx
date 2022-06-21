import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { ButtonLogin } from '../../components/ButtonLogin';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export function Login() {
    const navigation = useNavigation();

    function handleForgout() {
      navigation.navigate('Forgout');
    }

    function handleHome() {
        navigation.navigate('Mentor');
      }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Vamos entrar
                </Text>

                <Text style={styles.subtitle}>
                Bem-vindo de volta. {`\n`}
                Faça o seu login aqui!
                </Text>
            </View>

            <View style={styles.content}>
                <TextInput 
                    placeholder='E-mail ou Telefone'
                    style={styles.input}
                    placeholderTextColor="#FFF"
                />

                <View style={styles.inputArea}>
                    <TextInput 
                        placeholder='Senha'
                        style={styles.input}
                        placeholderTextColor="#FFF"
                    />
                    <TouchableOpacity style={styles.icon}>
                        <Ionicons name="eye" color="#FFF" size={25} />
                    </TouchableOpacity>

                </View>

                <Text style={styles.forgot} onPress={(handleForgout)}>
                    Esqueceu a senha?
                </Text>

                <Text style={styles.register}>
                    Não possui conta? Cadastre-se
                </Text>

                <ButtonLogin 
                    title="Entrar" 
                    activeOpacity={0.8}
                    onPress={(handleHome)}
                />

            </View>


        </View>
    );
}