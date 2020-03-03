import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import newsapi from '../api/newsapi';

const ResultsShowScreen = ({navigation, objectResult}) => {
  const url = navigation.getParam('url');

  return (
    <View style={styles.container}>
      {/* <Text>Author: {url}</Text> */}
      <Text style={styles.header}>News App</Text>
      <WebView source={{uri: url}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  image: {},
});

export default ResultsShowScreen;
