import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {ILLogo, ILGetStarted} from '../../assets';
import {Gap, Button} from '../../components';

import colors from '../../config/colors';

const GetStarted = () => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.container}>
      <ILLogo />
      <Gap flex={0.5} />
      <Text style={styles.text}>
        {'Konsultasi dengan\ndokter jadi lebih\nmudah & fleksibel'}
      </Text>
      <Gap flex={2} />
      <View style={styles.buttonContainer}>
        <Button
          backgroundColor={colors.green}
          color={colors.white}
          onPress={() => console.log('Get Started')}>
          Get Started
        </Button>
        <Gap height={16} />
        <Button
          backgroundColor={colors.white}
          color={colors.blueDark}
          onPress={() => console.log('Sign In')}>
          Sign In
        </Button>
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  buttonContainer: {},
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 40,
    paddingBottom: 44,
  },
  text: {
    color: colors.white,
    fontFamily: 'Nunito-SemiBold',
    fontSize: 28,
  },
});
