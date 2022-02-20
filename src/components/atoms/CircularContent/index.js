import {StyleSheet, View} from 'react-native';
import React from 'react';

const CircularContent = ({Content, style, radius}) => {
  return <View style={[styles.container(radius), {...style}]}>{Content}</View>;
};

export default CircularContent;

const styles = StyleSheet.create({
  container: radius => ({
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  }),
});
