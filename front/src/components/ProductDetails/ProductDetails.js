import './ProductDetails.css';

export default function ProductDetails({ loading, details }) {
  if(loading) {
    return (<p>Loading product details...</p>);
  }

  return (
    <p>{JSON.stringify(details)}</p>
  );
}