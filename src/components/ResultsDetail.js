import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetail = ({result}) => {
  return (
    <View style={styles.headlineContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{result.title}</Text>
        <Text>Source: {result.source.name}</Text>
      </View>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{uri: result.urlToImage}}
      />
    </View>
  );
};

const borderRadius = 5; // border radius for content styling
const styles = StyleSheet.create({
  headlineContainer: {
    marginVertical: 5,
    borderRadius: borderRadius,
    borderWidth: 1,
    backgroundColor: 'grey',
  },
  image: {
    flex: 1,
    width: undefined,
    height: 150,
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  },
  title: {
    fontWeight: 'bold',
  },
  textContainer: {
    borderColor: 'black',
    borderBottomWidth: 1,
    paddingLeft: 5,
  },
});

export default ResultsDetail;
