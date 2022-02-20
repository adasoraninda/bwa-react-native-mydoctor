import {StyleSheet, View} from 'react-native';
import React from 'react';

import {
  Button,
  PhotoProfile,
  TextButton,
  Header,
  IconButton,
  Gap,
} from '../../components';

import {IconBackDark, IconAddPhoto} from '../../assets';
import colors from '../../config/colors';

const UploadPhoto = ({navigation, data}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Upload Photo"
        Leading={
          <IconButton
            Icon={<IconBackDark />}
            onPress={() => navigation.goBack()}
          />
        }
      />
      <View style={styles.container}>
        <Gap flex={1} />
        <View>
          <PhotoProfile
            data={data}
            IconButton={
              <IconButton
                Icon={<IconAddPhoto />}
                onPress={() => console.log('Add photo')}
              />
            }
          />
        </View>
        <Gap flex={1} />
        <Button
          text="Upload and Continue"
          onPress={() => navigation.replace('MainApp')}
        />
        <Gap height={30} />
        <TextButton
          text="Skip for this"
          onPress={() => navigation.replace('MainApp')}
          underline
        />
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 44,
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
