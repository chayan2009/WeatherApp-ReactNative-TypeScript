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
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholderTextColor="#888"
        {...rest}
      />
    </View>
  );
};

export default GenericTextInput;
