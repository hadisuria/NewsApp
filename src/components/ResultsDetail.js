import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Item} from 'native-base';

const ResultsDetail = ({result}) => {
  return (
    <View>
      <Image style={styles.image} source={{uri: result.urlToImage}} />
      <Text style={styles.title}>{result.title}</Text>
      <Text>Source: {result.source.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 3,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default ResultsDetail;
