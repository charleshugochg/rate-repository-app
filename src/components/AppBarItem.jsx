import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  content: {
    color: 'white'
  }
});

const AppBarItem = ({ content, ...rest }) => {
  return (
    <Link component={TouchableWithoutFeedback} {...rest}>
      <View style={styles.container}>
        <Text fontSize='subheading' fontWeight='bold' style={styles.content}>{content}</Text>
      </View>
    </Link>
  );
};

export default AppBarItem;
