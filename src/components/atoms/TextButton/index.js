import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const TextButton = ({text, color, underline, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={[styles.text(underline), {color}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
  text: underline => ({
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    textDecorationLine: underline ? 'underline' : 'none',
  }),
});
