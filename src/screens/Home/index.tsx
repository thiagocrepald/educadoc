import React from 'react';
import { View, Text, Image } from 'react-native';
import { Profile } from '../../components/Profile';

import HourglassImg from '../../assets/hourglass.png';
import OutlineImg from '../../assets/outline.png';
import RemoveImg from '../../assets/remove.png';
import ChatOutImg from '../../assets/chatoutline.png';
import LineImg from '../../assets/line.png';

import { CategorySelect } from '../../components/CategorySelect';
import { styles } from './styles';

export function Home() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Profile />
            </View>

            <CategorySelect />
        
            <View style={styles.content}>
                <View style={styles.tickets}>
                    <View style={styles.imgstatus}>
                        <Image 
                            source={HourglassImg}
                            style={styles.img}
                        />
                    </View>
                    <View>
                        <Text style={styles.user}>
                            Naiara, 18
                        </Text>
                        <Text style={styles.status}>
                            Aguardando atendimento
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.date}>
                            Hoje
                        </Text>
                    </View>
                </View>
                
                <Image 
                    source={LineImg}
                    style={styles.line}
                />

                <View style={styles.tickets}>
                    <View style={styles.imgstatus}>
                        <Image 
                            source={OutlineImg}
                            style={styles.img}
                        />
                    </View>
                    <View>
                        <Text style={styles.user}>
                            André, 22
                        </Text>
                        <Text style={styles.status}>
                            Chamado Atendido
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.date}>
                            Hoje
                        </Text>
                    </View>
                </View>

                <Image 
                    source={LineImg}
                    style={styles.line}
                />

                <View style={styles.tickets}>
                    <View style={styles.imgstatus}>
                        <Image 
                            source={OutlineImg}
                            style={styles.img}
                        />
                    </View>
                    <View>
                        <Text style={styles.user}>
                            Jhonas, 25
                        </Text>
                        <Text style={styles.status}>
                            Chamado Atendido
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.date}>
                            Hoje
                        </Text>
                    </View>
                </View>

                <Image 
                    source={LineImg}
                    style={styles.line}
                />

                <View style={styles.tickets}>
                    <View style={styles.imgstatus}>
                        <Image 
                            source={RemoveImg}
                            style={styles.img}
                        />
                    </View>
                    <View>
                        <Text style={styles.user}>
                            Carla, 25
                        </Text>
                        <Text style={styles.status}>
                            Chamado Encerrado
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.date}>
                            Ontem
                        </Text>
                    </View>
                </View>

                <Image 
                    source={LineImg}
                    style={styles.line}
                />

                <View style={styles.tickets}>
                    <View style={styles.imgstatus}>
                        <Image 
                            source={RemoveImg}
                            style={styles.img}
                        />
                    </View>
                    <View>
                        <Text style={styles.user}>
                            Luiz, 78
                        </Text>
                        <Text style={styles.status}>
                            Chamado Encerrado
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.date}>
                            ontem
                        </Text>
                    </View>
                </View>

                <Image 
                    source={LineImg}
                    style={styles.line}
                />

                <View style={styles.tickets}>
                    <View style={styles.imgstatus}>
                        <Image 
                            source={ChatOutImg}
                            style={styles.img}
                        />
                    </View>
                    <View>
                        <Text style={styles.user}>
                            Jonas, 18
                        </Text>
                        <Text style={styles.status}>
                            Chamado atendido
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.date}>
                            22 de Abr.
                        </Text>
                    </View>
                </View>

            </View>
            

        </View>
    );
}