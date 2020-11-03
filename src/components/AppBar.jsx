import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e'
  }
});

const AppBar = ({ children }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>{children}</ScrollView>
    </View>
  );
};

export default AppBar;
