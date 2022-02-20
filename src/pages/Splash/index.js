import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import {ILLogo} from '../../assets';
import {Gap} from '../../components';

import colors from '../../config/colors';
import fonts from '../../config/fonts';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 2000);
  }, []);

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
    fontFamily: fonts.semiBold,
  },
});
