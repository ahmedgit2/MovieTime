import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { InputTextStyle } from './styles'
import { Colors } from '../../assets/colors'

export function Input(props) {

  const {
    placeholder,
    errors,
    otherStyle,
    keyboardType,
    onBlur,
    onChangeText,
    value,
    ...rest
  } = props;

  return (
    <View>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        style={[
          InputTextStyle.inputText,
          { ...otherStyle },
          errors && { borderWidth: 1, borderColor: Colors.main }]}
        {...rest}
      />


      {errors ?
        <Text style={InputTextStyle.errorMessage}>
          {errors}
        </Text>
        : null}
    </View>
  );
}
