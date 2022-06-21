import React from 'react';
import { View, Text } from 'react-native';

import { ButtonFourgout } from '../../components/ButtonForgout';

import { styles } from './styles';

export function Forgout() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <Text style={styles.subtitle}>
                    Entre no link que
                </Text>
                <Text style={styles.subtitle}>
                    enviamos para o seu e-mail
                </Text>
            </View>

            <View style={styles.content}>

                <ButtonFourgout 
                    title="Próximo" 
                    activeOpacity={0.8}
                />

            </View>

        </View>
    );
}