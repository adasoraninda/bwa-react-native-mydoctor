import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import {ILLogo} from '../../assets';
import {Button, FormInputField, Gap, TextButton} from '../../components';

import colors from '../../config/colors';
import fonts from '../../config/fonts';

const SingIn = ({navigation}) => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
      <ILLogo />
      <Gap flex={1} />
      <Text style={styles.text}>{'Masuk dan mulai\nberkonsultasi'}</Text>
      <Gap height={40} />
      <FormInputField
        label="Email Address"
        autoCapitalize="none"
        keyboardType="email-address"
        focused={emailFocus}
        error={emailError}
        onFocus={() => setEmailFocus(true)}
        onBlur={() => setEmailFocus(false)}
        onChangeText={() => setEmailError(false)}
      />
      <Gap height={16} />
      <FormInputField
        label="Password"
        autoCapitalize="none"
        secureTextEntry
        focused={passwordFocus}
        error={passwordError}
        onFocus={() => setPasswordFocus(true)}
        onBlur={() => setPasswordError(false)}
        onChangeText={() => setPasswordError(false)}
      />
      <Gap height={8} />
      <TextButton
        color={colors.grey}
        size={12}
        text="Forgot My Password"
        underline
        onPress={() => console.log('Forgot Password')}
      />
      <Gap height={40} />
      <View style={styles.buttonContainer}>
        <Button
          backgroundColor={colors.green}
          color={colors.white}
          text="Sign In"
          onPress={() => navigation.replace('MainApp')}
        />
        <Gap height={30} />
        <TextButton
          color={colors.grey}
          underline
          text="Create New Account"
          onPress={() => console.log('Create New Account')}
        />
      </View>
    </ScrollView>
  );
};

export default SingIn;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 40,
    paddingVertical: 44,
  },
  text: {
    color: colors.blueDark,
    fontSize: 20,
    fontFamily: fonts.semiBold,
    marginTop: 16,
  },
});
