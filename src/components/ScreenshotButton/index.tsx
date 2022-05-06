import React from 'react';

import { View, TouchableOpacity, Image } from 'react-native';
import { Camera, Trash } from 'phosphor-react-native';

import { theme } from '../../theme';
import { styles } from './styles';

interface ScreenshotButtonProps {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({ screenshot, onRemoveShot, onTakeShot }: ScreenshotButtonProps) {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {screenshot ? (
        <View>
          <Image 
            source={{ uri: screenshot }}
            style={styles.image}
          />

          <Trash 
            size={22}
            color={theme.colors.text_secondary}
            weight='fill'
            style={styles.removeIcon}
          />
        </View>
      ) : (
        <Camera
          size={24}
          color={theme.colors.text_secondary}
          weight='bold'
        />
      )}
    </TouchableOpacity>
  );
}