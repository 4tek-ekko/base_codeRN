import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  SupperSdk,
  AppText,
  AppButton,
  Padding,
} from 'react-native-super-app-sdk';

function Main() {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar />
      <View style={styles.container}>
        <Text style={styles.wellcomeTxt}>Wellcome mini app</Text>
      </View>
    </SafeAreaView>
  );
}

export default React.memo(Main);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignContent: "center",
    alignItems: "center",
  },
  wellcomeTxt: {
    fontSize: 24,
    color: "black",
  },
});