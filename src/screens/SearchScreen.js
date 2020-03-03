import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';

// import yelp from '../api/yelp';
//test news
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [newsSearchApi, results, errorMessage] = useResults();

  const filterResultsBySource = name => {
    return results.filter(result => {
      return result.source.name === name;
    });
  };

  return (
    <>
      <View style={styles.container}>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => newsSearchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        {/* <Text>We have found {results.length} results</Text> */}
        {/* <ResultList results={filterResultsBySource('cnn')} title="CNN" />
        <ResultList
          results={filterResultsBySource('nbc-news')}
          title="NBC News"
        />
        <ResultList
          results={filterResultsBySource('fox-news')}
          title="Fox News"
        /> */}
        <ResultList results={results} title="Top News Today" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    flexGrow: 1,
  },
  searchIcon: {
    flexDirection: 'row',
  },
});

export default SearchScreen;
