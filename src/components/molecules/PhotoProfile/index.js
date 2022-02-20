import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import {ILGetStarted, ILNullPhoto} from '../../../assets';
import {CircularContent, Gap} from '../../atoms';

import colors from '../../../config/colors';
import fonts from '../../../config/fonts';

const PhotoProfile = ({
  data = {name: null, job: null, image: null},
  IconButton = null,
}) => {
  const imageResource = data.image ? data.image : ILNullPhoto;

  return (
    <View style={styles.container}>
      <View>
        <CircularContent
          radius={65}
          style={{
            backgroundColor: colors.white,
            borderWidth: 1,
            borderColor: colors.lightGrey3,
          }}
          Content={<Image style={styles.image} source={imageResource} />}
        />
        <CircularContent
          radius={25}
          style={{
            position: 'absolute',
            end: 6,
            bottom: 8,
            backgroundColor: colors.white,
          }}
          Content={IconButton}
        />
      </View>
      <Gap height={26} />
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.job}>{data.job}</Text>
    </View>
  );
};

export default PhotoProfile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 110,
    height: 110,
    resizeMode: 'cover',
  },
  job: {
    fontSize: 18,
    fontFamily: fonts.regular,
    color: colors.grey,
    textAlign: 'center',
  },
  name: {
    fontSize: 24,
    fontFamily: fonts.semiBold,
    color: colors.blueDark,
    textAlign: 'center',
  },
});
