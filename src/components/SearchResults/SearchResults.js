import { useLocation } from 'react-router-dom';
import Items from '../Items';
import './SearchResults.css';

export default function SearchResults() {
  const { search: searchParam } = useLocation();
  const search = new URLSearchParams(searchParam).get('search');
  
  return(
    <div className="SearchResults">
      <section>Breadcrumb: {search}</section>
      <Items />
    </div>
  );
}