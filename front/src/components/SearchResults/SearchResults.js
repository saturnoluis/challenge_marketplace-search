import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ItemsRenderer from '../ItemsRenderer';
import './SearchResults.css';

export default function SearchResults() {
  const { search: searchParam } = useLocation();
  const searchQuery = new URLSearchParams(searchParam).get('search');

  const [ searchResults, setSearchResults ] = useState({});
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/items?q=${searchQuery}`)
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setSearchResults(data);
      });
  }, [searchQuery]);


  return(
    <ItemsRenderer loading={loading} items={searchResults} />
  );
}
