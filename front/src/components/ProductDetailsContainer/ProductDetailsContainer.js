import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../ProductDetails';

export default function ProductDetailsContainer() {
  const { id } = useParams();
  const [ productDetails, setProductDetails ] = useState({});
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/items/${id}`).then(res => res.json()).then(data => {
      setLoading(false);
      setProductDetails(data);
    });
  }, [id]);


  return (
    <ProductDetails loading={loading} details={productDetails} />
  );
}