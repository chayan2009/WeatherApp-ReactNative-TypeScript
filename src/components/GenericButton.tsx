import React from 'react';
import { TouchableOpacity, Text, ViewStyle, View } from 'react-native';
import buttonstyles from './GenericButton.style';
interface GenericButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}


const GenericButton: React.FC<GenericButtonProps> = ({ title, onPress, style }) => {
    return (
      <View style={buttonstyles.container}>
        <TouchableOpacity style={[buttonstyles.button, style]} onPress={onPress} activeOpacity={0.7}>
          <Text style={buttonstyles.text}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

export default GenericButton;
