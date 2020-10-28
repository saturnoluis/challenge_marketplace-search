import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Items from '../Items';
import './SearchResults.css';

export default function SearchResults() {
  const { search: searchParam } = useLocation();
  const search = new URLSearchParams(searchParam).get('search');
  const [ searchResults, setSearchResults ] = useState(null);

  console.log('Im using search!', search);

  setTimeout(() => {
    setSearchResults({});
  }, 5000);
  
  if(!searchResults) {
    return(
      <div>Loading...</div>
    );
  }

  return(
    <div className="SearchResults">
      <section>Breadcrumb</section>
      <Items />
    </div>
  );
}