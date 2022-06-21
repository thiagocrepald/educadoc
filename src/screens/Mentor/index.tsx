import React from "react";
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

import { Profile } from '../../components/Profile';

import AndreaImg from '../../assets/andreaimg.png';
import NomegrandeImg from '../../assets/nomegrande.png';
import LuanaImg from '../../assets/luana.png';
import LucasImg from '../../assets/lucassch.png';

import LineImg from '../../assets/line.png';


export function Mentor() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Profile />
            </View>

            <View style={styles.conttickets}>
                <Text style={styles.title}>
                    Seus chamados
                </Text>                
            </View>

            <Image 
                source={LineImg}
                style={styles.line}
            />
        
            <View style={styles.content}>
                <View style={styles.tickets}>
                    <View style={styles.imgstatus}>
                        <Image 
                            source={AndreaImg}
                            style={styles.img}
                        />
                    </View>
                    <View>
                        <Text style={styles.user}>
                            Andréa Monteiro
                        </Text>
                        <Text style={styles.status}>
                            ok, vou fazer isso.
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
                            source={NomegrandeImg}
                            style={styles.img}
                        />
                    </View>
                    <View>
                        <Text style={styles.user}>
                            Lucas Schumann
                        </Text>
                        <Text style={styles.status}>
                            Este chamado foi encerrado
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
                            source={LuanaImg}
                            style={styles.img}
                        />
                    </View>
                    <View>
                        <Text style={styles.user}>
                            Luana Albuquerque
                        </Text>
                        <Text style={styles.status}>
                            ok, vou fazer isso.
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
                            source={LucasImg}
                            style={styles.img}
                        />
                    </View>
                    <View>
                        <Text style={styles.user}>
                            Jonas Brito
                        </Text>
                        <Text style={styles.status}>
                            ok, vou fazer isso.
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.date}>
                            Ontem
                        </Text>
                    </View>
                </View>


            </View>
            

        </View>
    );
}