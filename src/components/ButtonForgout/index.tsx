import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
    title?: string;
}

export function ButtonFourgout({ title, ...rest } : Props){
    return(
        
        <TouchableOpacity 
            style={styles.container}
            {...rest}
        >

            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    { title }
                </Text>
            </View>

        </TouchableOpacity>
    );
}