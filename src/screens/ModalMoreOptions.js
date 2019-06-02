import React from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
  FlatList,
  ScrollView,
  StyleSheet
} from 'react-native';

import { device, gStyle } from '../constants';
import yourLibrary from '../mockdata/menuYourLibrary';
import LineItemCategory from '../components/LineItemCategory';

export default function ModalMore({ navigation }) {
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
        <SafeAreaView>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.goBack();
              navigation.getParam('toggleBlur')();
            }}
          >
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                backgroundColor: 'black'
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
        <FlatList
          contentContainerStyle={styles.containerFlatlist}
          data={yourLibrary}
          keyExtractor={itemObj => itemObj.id.toString()}
          renderItem={itemObj => {
            const { item } = itemObj;

            return (
              <LineItemCategory
                icon={item.icon}
                onPress={() => null}
                title={item.title}
              />
            );
          }}
        />
      </ScrollView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  containerFlatlist: {
    marginTop: device.iPhoneX ? 88 : 64
  }
});
