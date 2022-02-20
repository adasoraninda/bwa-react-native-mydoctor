import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import fonts from '../../../config/fonts';
import colors from '../../../config/colors';

const Button = ({
  backgroundColor = colors.green,
  color = colors.white,
  disabled = false,
  onPress,
  text,
  width = '100%',
}) => {
  backgroundColor = disabled ? colors.lightGrey : backgroundColor;
  color = disabled ? colors.mediumGrey : color;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
      style={[styles.container, {backgroundColor, width}]}>
      <Text style={[styles.text, {color}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.semiBold,
    textAlign: 'center',
  },
});
