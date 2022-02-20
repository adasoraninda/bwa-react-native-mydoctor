import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {ILLogo, ILGetStarted} from '../../assets';
import {Gap, Button} from '../../components';

import colors from '../../config/colors';
import fonts from '../../config/fonts';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.container}>
      <View>
        <ILLogo />
        <Gap height={90} />
        <Text style={styles.text}>
          {'Konsultasi dengan\ndokter jadi lebih\nmudah & fleksibel'}
        </Text>
      </View>
      <View>
        <Button
          backgroundColor={colors.green}
          color={colors.white}
          onPress={() => navigation.navigate('SignUp')}
          text=" Get Started"
        />
        <Gap height={16} />
        <Button
          backgroundColor={colors.white}
          color={colors.blueDark}
          onPress={() => navigation.navigate('SignIn')}
          text="Sign In"
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingTop: 40,
    paddingBottom: 44,
  },
  text: {
    color: colors.white,
    fontFamily: fonts.semiBold,
    fontSize: 28,
  },
});
