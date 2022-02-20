import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import InputField from '../../atoms/InputField';

import colors from '../../../config/colors';
import fonts from '../../../config/fonts';
import {Gap} from '../../atoms';

const FormInputField = ({
  label,
  disabled,
  focused,
  placeholder,
  width = '100%',
  ...otherProps
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Gap height={6} />
      <InputField
        {...otherProps}
        disabled={disabled}
        focused={focused}
        placeholder={placeholder}
        width={width}
      />
    </View>
  );
};

export default FormInputField;

const styles = StyleSheet.create({
  label: {
    color: colors.grey,
    fontSize: 16,
    fontFamily: fonts.regular,
  },
});
