import {useEffect, useState} from 'react';
import newsapi from '../api/newsapi';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  // const searchApi = async () => {
  //   const response = await yelp.get('/search ', {
  //     params: {
  //       limit: 50,
  //       term,
  //       location: 'san jose',
  //     },
  //   });
  //   setResults(response.data.businesses);
  //   console.log(response);
  // };

  //test news
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

  // Call searchApi when component
  // is first rendered. BAD CODE!
  // newsSearchApi('us');
  useEffect(() => {
    newsSearchApi('us');
  }, []);

  return [newsSearchApi, results, errorMessage];
};
