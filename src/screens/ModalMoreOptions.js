import React from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
  FlatList,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native';

import { device, gStyle, images, colors } from '../constants';
import yourLibrary from '../mockdata/menuYourLibrary';
import LineItemCategory from '../components/LineItemCategory';

export default function ModalMore({
  navigation,
  screenProps: { setToggleTabBar }
}) {
  const album = navigation.getParam('album');

  return (
    <React.Fragment>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          zIndex: 50
        }}
      >
        <SafeAreaView style={{ backgroundColor: '#161616' }}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.goBack();
              setToggleTabBar();
            }}
          >
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 18
                }}
              >
                Cancel
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ ...gStyle.container, backgroundColor: 'none' }}
      >
        <View style={styles.container}>
          <View style={styles.containerImage}>
            <Image source={images[album.image]} style={styles.image} />
          </View>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
            {album.title}
          </Text>
          <Text style={styles.albumInfo}>
            {`Album by ${album.artist} · ${album.released}`}
          </Text>
        </View>

        <FlatList
          data={yourLibrary}
          keyExtractor={itemObj => itemObj.id.toString()}
          renderItem={itemObj => {
            const { item } = itemObj;

            return (
              <View style={{ marginBottom: 22 }}>
                <LineItemCategory
                  icon={item.icon}
                  onPress={() => null}
                  title={item.title}
                  disableRightSide
                />
              </View>
            );
          }}
        />
      </ScrollView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    height: 89,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 100
  },
  headerLinear: {
    height: 89,
    width: '100%'
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: device.iPhoneX ? 48 : 24,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  headerTitle: {
    color: colors.white,
    fontFamily: fonts.spotifyBold,
    fontSize: 16,
    paddingHorizontal: 8,
    marginTop: 2,
    textAlign: 'center',
    width: device.width - 100
  },
  container: {
    alignItems: 'center',
    paddingTop: device.iPhoneX ? 94 : 50,
    width: '100%'
  },
  containerLinear: {
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  containerImage: {
    shadowColor: colors.black,
    shadowOffset: { height: 8, width: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 6
  },
  image: {
    height: 148,
    marginBottom: 16,
    width: 148
  },
  title: {
    color: colors.white,
    fontFamily: fonts.spotifyBold,
    fontSize: 20,
    paddingHorizontal: 24,
    marginBottom: 8,
    textAlign: 'center'
  },
  albumInfo: {
    color: colors.greyInactive,
    fontFamily: fonts.spotifyRegular,
    fontSize: 12,
    marginBottom: 48
  },
  containerScroll: {
    paddingTop: 89
  },
  containerSticky: {
    marginTop: device.iPhoneX ? 238 : 194
  },
  containerShuffle: {
    alignItems: 'center',
    height: 50,
    shadowColor: colors.blackBg,
    shadowOffset: { height: -10, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 20
  },
  containerStickyLinear: {
    top: 0,
    position: 'absolute',
    width: '100%'
  },
  btn: {
    backgroundColor: colors.brandPrimary,
    borderRadius: 25,
    height: 50,
    width: 220
  },
  btnText: {
    color: colors.white,
    fontFamily: fonts.spotifyBold,
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  containerSongs: {
    alignItems: 'center',
    backgroundColor: colors.blackBg,
    minHeight: 540
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    width: '100%'
  },
  downloadText: {
    color: colors.white,
    fontFamily: fonts.spotifyBold,
    fontSize: 18
  }
});
