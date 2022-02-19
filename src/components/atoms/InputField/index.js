import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';

import colors from '../../../config/colors';

const InputField = ({
  disabled,
  focused,
  error,
  placeholder,
  width = '100%',
  ...otherProps
}) => {
  const backgroundColor = disabled ? colors.lightGrey : colors.white;
  const borderColor = error
    ? colors.red
    : disabled
    ? colors.lightGrey
    : focused
    ? colors.mediumBlue
    : colors.lightGrey2;

  return (
    <View style={[styles.container, {width}, {backgroundColor, borderColor}]}>
      <TextInput
        {...otherProps}
        autoCorrect={false}
        underlineColorAndroid="transparent"
        placeholder={placeholder}
        placeholderTextColor={colors.mediumGrey}
        focusable
        editable={!disabled}
        style={[styles.input, {width}]}
        selectionColor={colors.green}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 12,
  },
  input: {
    padding: 0,
    textDecorationLine: 'none',
  },
});
