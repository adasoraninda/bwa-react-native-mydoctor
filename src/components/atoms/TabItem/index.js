import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconDoctor,
  IconDoctorActive,
  IconHospitals,
  IconHospitalsActive,
  IconMessages,
  IconMessagesActive,
} from '../../../assets';
import {Gap} from '..';
import fonts from '../../../config/fonts';
import colors from '../../../config/colors';

const TabItem = ({title, focused, onPress, onLongPress}) => {
  const Icon = () => {
    switch (title) {
      case 'Doctor':
        return focused ? <IconDoctorActive /> : <IconDoctor />;
      case 'Messages':
        return focused ? <IconMessagesActive /> : <IconMessages />;
      case 'Hospitals':
        return focused ? <IconHospitalsActive /> : <IconHospitals />;
      default:
        return focused ? <IconDoctorActive /> : <IconDoctor />;
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Gap height={4} />
      <Text style={styles.text(focused)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: focused => ({
    fontSize: 12,
    fontFamily: fonts.semiBold,
    color: focused ? colors.green : colors.purpleDark,
  }),
});
