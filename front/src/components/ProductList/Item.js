import { Link } from 'react-router-dom';
import PriceTag from '../PriceTag';

export default function Item({ data }) {
  const { id, title, price, picture, condition } = data;
  const detailURL = `/items/${id}`;

  return (
    <article className="ProductList__Item">
      <Link className="Item__picture" to={detailURL}>
        <img src={picture} alt={title} />
      </Link>
      <i className="Item_condition">
        {condition === 'new' ? 'Nuevo' : 'Usado'}
      </i>
      <Link className="Item__title" to={detailURL}>
        {title}
      </Link>
      <PriceTag
        className="Item__price"
        currency={price.currency}
        amount={price.amount}
        decimals={price.decimals}
      />
    </article>
  );
}