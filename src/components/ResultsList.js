import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';

import {withNavigation} from 'react-navigation';

const ResultList = ({title, results, navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Text style={styles.title}>{title}</Text>
      <Text>Results: {results.length} </Text>
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator="none"
        data={results}
        keyExtractor={result => result.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate('ResultsShow', {
                  url: item.url,
                })
              }>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default withNavigation(ResultList);
