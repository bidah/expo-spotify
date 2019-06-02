import React from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  SafeAreaView
} from 'react-native';

export default function ModalMore({ navigation }) {
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.goBack();
          navigation.getParam('toggleBlur')();
        }}
      >
        <View style={{ opacity: 1 }}>
          <Text style={{ color: 'white' }}>More options</Text>
          <Text style={{ color: 'white' }}>More options</Text>
          <Text style={{ color: 'white' }}>More options</Text>
          <Text style={{ color: 'white' }}>More options</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
