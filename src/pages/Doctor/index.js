import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

import {CategoryDoctor, Gap, HomeProfile} from '../../components';
import fonts from '../../config/fonts';
import colors from '../../config/colors';
import {ILCatObat, ILCatPsikiater, ILCatUmum} from '../../assets';

const Doctor = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <HomeProfile />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.consultationContainer}>
            <Text style={styles.textConsultation}>
              {'Mau konsultasi dengan\nsiapa hari ini?'}
            </Text>
            <Gap height={16} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <CategoryDoctor Image={ILCatObat} />
              <Gap width={10} />
              <CategoryDoctor Image={ILCatPsikiater} />
              <Gap width={10} />
              <CategoryDoctor Image={ILCatUmum} />
              <Gap width={10} />
              <CategoryDoctor Image={ILCatUmum} />
            </ScrollView>
          </View>
          <Gap height={30} />
          <View style={styles.ratedContainer}>
            <Text style={styles.textRated}>Top Rated Doctors</Text>
          </View>
          <Gap height={30} />
          <View style={styles.newsContainer}>
            <Text style={styles.textNews}>Good News</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  consultationContainer: {
    marginStart: 16,
  },
  ratedContainer: {
    marginStart: 16,
  },
  newsContainer: {
    marginStart: 16,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24,
  },
  page: {
    flex: 1,
    backgroundColor: colors.blueDark,
  },
  textConsultation: {
    fontSize: 20,
    fontFamily: fonts.semiBold,
    color: colors.blueDark,
  },
  textRated: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
    color: colors.blueDark,
  },
  textNews: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
    color: colors.blueDark,
  },
});
