import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {
    Text, View,
} from 'react-native';

import { styles } from './styles';

type Props = RectButtonProps & {
    title?: string;
}

export function ButtonIcon({ title, ...rest } : Props){
    return(
        <RectButton 
            style={styles.container}
            {...rest}
        >
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    { title }
                </Text>
            </View>

            <Text style={styles.register}>
                Não possui conta? Cadastre-se
            </Text>
        </RectButton>
    );
}