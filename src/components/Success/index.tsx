import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import successImage from '../../assets/success.png'
import { Copyright } from '../Copyright';

import { styles } from './styles';

interface SuccessProps {
  onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback }: SuccessProps) {
  return (
    <View style={styles.container}>
      <Image 
        source={successImage}
        style={styles.image}
      />

      <Text style={styles.title}>
        Agradecemos o feedback!
      </Text>

      <TouchableOpacity  style={styles.button} onPress={onSendAnotherFeedback}>
        <Text style={styles.buttonText}>
          Quero enviar outro
        </Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}