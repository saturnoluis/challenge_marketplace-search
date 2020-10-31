import { useParams } from 'react-router-dom';

export default function ProductDetailsContainer() {
  const { id } = useParams();

  return (
    <p>
      <a href={`https://api.mercadolibre.com/items/​${id}`}>
        items/{id}
      </a>
      <p>---</p>
      <a href={`https://api.mercadolibre.com/items/​${id}/description`}>
        /items/{id}/description  
      </a>
    </p>
  );
}