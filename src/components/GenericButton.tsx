import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleProp,
  TextStyle,
} from 'react-native';
import buttonstyles from './GenericButton.style';

interface GenericButtonProps {
  title: string;
  onPress: () => void;
  textStyle?: StyleProp<TextStyle>;
}

const GenericButton: React.FC<GenericButtonProps> = ({
  title,
  onPress,
  textStyle,
}) => {
  return (
    <View style={buttonstyles.container}>
      <TouchableOpacity
        style={buttonstyles.button}
        onPress={onPress}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel={title}
      >
        <Text style={[buttonstyles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GenericButton;
