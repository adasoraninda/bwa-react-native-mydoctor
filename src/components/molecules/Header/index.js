import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import colors from '../../../config/colors';
import fonts from '../../../config/fonts';

const Header = ({title, Leading, Action}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>{title}</Text>
      <View style={{position: 'absolute', start: 0, marginStart: 20}}>
        {Leading}
      </View>
      <View style={{position: 'absolute', end: 0, marginEnd: 20}}>
        {Action}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    flex: 1,
    color: colors.blueDark,
    fontSize: 20,
    fontFamily: fonts.semiBold,
    textAlign: 'center',
  },
});
