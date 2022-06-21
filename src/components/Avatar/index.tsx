import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';

import avatar from '../../assets/avatar.png';

export function Avatar() {
    return(
        <Image 
            source={avatar}
            style={styles.avatar}
        />
    )
}