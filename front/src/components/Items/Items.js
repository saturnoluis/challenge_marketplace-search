import { Link } from 'react-router-dom';
import PriceTag from '../PriceTag';
import './Items.css';

function renderItem(item) {
  const itemURL = `/items/${item.id}`;
  return (
    <article>
      <Link to={itemURL}>
        <img src={item.picture} alt={item.title} />
      </Link>
      <Link to={itemURL}>
        {item.title}
      </Link>
      <PriceTag
        currency={item.price.currency}
        amount={item.price.amount}
        decimals={item.price.decimals}
      />
      <i>
        {item.condition === 'new' ? 'Nuevo' : 'Usado'}
      </i>
    </article>
  );
}

export default function Items({ items = [] }) {
  return (
    <div className="Items">
      {items.map(renderItem)}
    </div>
  );
}
