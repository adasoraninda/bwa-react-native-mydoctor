import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {ILLogo} from '../../assets';
import {Gap} from '../../components';

import colors from '../../config/colors';

const Splash = () => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Gap height={16} />
      <Text style={styles.text}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
  },
});
