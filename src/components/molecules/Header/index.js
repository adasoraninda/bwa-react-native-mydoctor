import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {IconBackDark} from '../../../assets';

import colors from '../../../config/colors';

const Header = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      {onPress && (
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <IconBackDark />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  button: {
    padding: 16,
    position: 'absolute',
    marginStart: 4,
  },
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
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
  },
});
