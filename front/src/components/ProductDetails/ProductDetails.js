import get from 'lodash/get';
import PriceTag from '../PriceTag';
import './ProductDetails.css';

export default function ProductDetails({ loading, details }) {
  const getItem = value => get(details, `item.${value}`);
  
  if(loading) {
    return (<p>Loading product details...</p>);
  }

  return (
    <article id={getItem('id')} className="ProductDetails">
      <div className="column--left">
        <i>
          {getItem('condition') === 'new' ? 'Nuevo' : 'Usado'}
          -
          {getItem('sold_quantity')} vendidos
        </i>
        <h1>{getItem('title')}</h1>
        <PriceTag
          currency={getItem('price.currency')}
          amount={getItem('price.amount')}
          decimals={getItem('price.decimals')}
        />
        <button className="button--buy">Comprar</button>
      </div>
      <div className="column--right">
        <figure>
          <img src={getItem('picture')} />
        </figure>
        <p>
          {getItem('description')}
        </p>
      </div>
    </article>
  );
}