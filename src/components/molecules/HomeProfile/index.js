import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import {Gap, CircularContent} from '../../atoms';
import {ILNullPhoto} from '../../../assets';
import fonts from '../../../config/fonts';
import colors from '../../../config/colors';

const HomeProfile = ({data = {name: null, job: null, image: null}}) => {
  const imageResource = data.image ? data.image : ILNullPhoto;

  return (
    <View style={styles.container}>
      <CircularContent
        radius={33}
        Content={<Image style={styles.image} source={imageResource} />}
      />
      <Gap width={12} />
      <View style={styles.textContainer}>
        <Text style={styles.name} numberOfLines={1}>
          DoctorDoctorDoctorDoctorDoctorDoctorDoctorDoctorDoctorDoctorDoctorDoctorDoctorDoctor
        </Text>
        <Text style={styles.job} numberOfLines={1}>
          DoctorDoctorDoctorDoctorDoctorDoctorDoctorDoctorDoctorDoctorDoctorDoctorDoctor
        </Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 16,
  },
  image: {
    height: 66,
    width: 66,
    resizeMode: 'cover',
  },
  job: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.grey,
  },
  name: {
    fontSize: 18,
    fontFamily: fonts.semiBold,
    color: colors.blueDark,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
