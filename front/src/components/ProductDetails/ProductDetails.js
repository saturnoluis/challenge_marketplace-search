import get from 'lodash/get';
import PriceTag from '../PriceTag';
import './ProductDetails.css';

export default function ProductDetails({ loading, details }) {
  const getItem = value => get(details, `item.${value}`);
  
  if(loading) {
    return (<p>Loading product details...</p>);
  }

  return (
    <article id={getItem('id')} className="productDetails">
      <div className="productDetails__column--wide">
        <figure className="productDetails__picture">
          <img src={getItem('picture')} alt={getItem('title')} />
        </figure>
        <h2>Descripción del producto</h2>
        <p className="productDetails__description">
          {getItem('description')}
        </p>
      </div>
      <div className="productDetails__column--narrow">
        <i className="productDetails__condition">
          {getItem('condition') === 'new' ? 'Nuevo ' : 'Usado '}
          - {getItem('sold_quantity')} vendidos
        </i>
        <h1 className="productDetails__title">{getItem('title')}</h1>
        <PriceTag
          className="productDetails__price"
          currency={getItem('price.currency')}
          amount={getItem('price.amount')}
          decimals={getItem('price.decimals')}
        />
        <button className="productDetails__button--buy">
          Comprar ahora
        </button>
      </div>
    </article>
  );
}