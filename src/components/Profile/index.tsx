import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile() {
    return(
        <View style={styles.container}>

            <View>

                <View>
                    <Text style={styles.date}>
                        Terça, 27 de Maio
                    </Text>

                </View>

                <View style={styles.user}>
                    <Text style={styles.greeting}>
                            Olá,
                    </Text>

                    <Text style={styles.username}>
                        Nome do médico
                    </Text>
                </View>
            </View>

            <Avatar />

        </View>
    )
}