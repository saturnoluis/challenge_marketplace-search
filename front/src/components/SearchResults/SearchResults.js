import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import Items from '../Items';
import './SearchResults.css';

export default function SearchResults() {
  const { search: searchParam } = useLocation();
  const search = new URLSearchParams(searchParam).get('search');

  const [ searchResults, setSearchResults ] = useState({ items: [] });

  useEffect(() => {
    fetch(`/api/items?q=${search}`)
      .then(res => res.json())
      .then(data => {
        setSearchResults(data);
      });
  }, []);

  if(isEmpty(searchResults.data)) {
    return(
      <div>Loading...</div>
    );
  }

  console.log({ data: searchResults.data });

  return(
    <div className="SearchResults">
      <section>Breadcrumb</section>
      <Items />
    </div>
  );
}
