import React from 'react';
import { 
    View, 
    Text,
    Image, 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';
import EducamonoImg from '../../assets/educamono.png';
import { styles } from './styles';

export function SignIn(){
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Login');
  }

  return(
    <View style={styles.container}>      
      
      <Image 
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conheça a mentoria {`\n`}
          <Image
            source={EducamonoImg}
          />
        </Text>

        <Text style={styles.subtitle}>
        Conte com profissionais médicos com {`\n`}
        ampla expertise em situações críticas {`\n`}
        para te auxiliar nas tomadas de decisões.
        </Text>

      <ButtonIcon 
        title="Login" 
        activeOpacity={0.8}
        onPress={handleSignIn}
      />
      </View>
    </View>
  );
}