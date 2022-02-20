import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {CircularContent, Gap} from '../..';
import colors from '../../../config/colors';
import fonts from '../../../config/fonts';

const CategoryDoctor = ({
  Image = null,
  title = 'Saya butuh',
  description = 'Dokter',
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}>
      {Image == null ? (
        <CircularContent radius={28} style={{backgroundColor: colors.green}} />
      ) : (
        <Image />
      )}
      <Gap flex={1} />
      <View>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={1}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryDoctor;

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 140,
    borderRadius: 10,
    backgroundColor: colors.lightGreen,
    padding: 12,
  },
  title: {
    fontSize: 14,
    color: colors.blueDark,
    fontFamily: fonts.light,
  },
  description: {
    fontSize: 14,
    color: colors.blueDark,
    fontFamily: fonts.semiBold,
  },
});
