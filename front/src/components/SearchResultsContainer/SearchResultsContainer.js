import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchResults from '../SearchResults';

export default function SearchResultsContainer() {
  const { search: searchParam } = useLocation();
  const searchQuery = new URLSearchParams(searchParam).get('search');

  const [ searchResults, setSearchResults ] = useState({});
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/items?q=${searchQuery}`).then(res => res.json()).then(data => {
      setLoading(false);
      setSearchResults(data);
    });
  }, [searchQuery]);


  return (
    <SearchResults loading={loading} searchResults={searchResults} />
  );
}
