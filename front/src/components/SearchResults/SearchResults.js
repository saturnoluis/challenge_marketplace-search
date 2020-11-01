import LoadingSpinner from '../LoadingSpinner';
import Breadcrumb from '../Breadcrumb';
import ProductList from '../ProductList';
import './SearchResults.css';

const searchResultsFallback = {
  categories: [],
  items: []
};

export default function SearchResults(props) {
  const { loading, searchResults = searchResultsFallback } = props;

  if (loading) {
    return (
      <LoadingSpinner loading={loading} />
    );
  }

  return (
    <div className="SearchResults">
      <Breadcrumb trail={searchResults.categories} />
      <ProductList items={searchResults.items} />
    </div>
  );
}
