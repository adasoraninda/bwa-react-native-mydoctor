import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import fonts from '../../../config/fonts';
import colors from '../../../config/colors';

const TextButton = ({
  color = colors.grey,
  onPress,
  size = 16,
  text,
  underline,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={[styles.text(underline), {color, fontSize: size}]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
  text: underline => ({
    fontFamily: fonts.regular,
    textDecorationLine: underline ? 'underline' : 'none',
  }),
});
