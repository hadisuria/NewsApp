import {useEffect, useState} from 'react';
import newsapi from '../api/newsapi';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  //get data from newsapi
  const newsSearchApi = async searchTerm => {
    try {
      const newsresponse = await newsapi.get('/everything', {
        params: {
          q: searchTerm,
          // // from: '2020-02-28',
          sortBy: 'popularity',
        },
      });
      setResults(newsresponse.data.articles);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    newsSearchApi('us');
  }, []);

  return [newsSearchApi, results, errorMessage];
};
