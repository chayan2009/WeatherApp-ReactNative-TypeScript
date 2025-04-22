import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import styles from './GenericTextInput.style';

interface GenericTextInputProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const GenericTextInput: React.FC<GenericTextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888"
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};

export default GenericTextInput;
