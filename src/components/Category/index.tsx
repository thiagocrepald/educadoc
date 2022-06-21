import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { View, Text } from 'react-native';


import { styles } from './styles';

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
}

export function Category({
    title,
    icon: Icon,
    ...rest
}: Props){
    return(
        <RectButton {...rest}>
            <View style={ styles.container }>

                <View style={styles.content}>
                    <Icon 
                        width={50} 
                        height={50} 
                    />

                    <Text style={styles.title}>
                        { title }
                    </Text>
                </View>

            </View>
        </RectButton>
    );
}