import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {
  Button,
  FormInputField,
  Gap,
  Header,
  IconButton,
} from '../../components';

import colors from '../../config/colors';
import {IconBackDark} from '../../assets';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Daftar Akun"
        Leading={
          <IconButton
            Icon={<IconBackDark />}
            onPress={() => navigation.goBack()}
          />
        }
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.formContainer}>
        <FormInputField label={'Full Name'} />
        <Gap height={16} />
        <FormInputField label={'Job'} />
        <Gap height={16} />
        <FormInputField
          label="Email Address"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Gap height={16} />
        <FormInputField
          label="Password"
          autoCapitalize="none"
          secureTextEntry
        />
        <Gap height={40} />
        <Button
          backgroundColor={colors.green}
          color={colors.white}
          text="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
