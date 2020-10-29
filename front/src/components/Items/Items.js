import { Link } from 'react-router-dom';
import './Items.css';

function ItemPrice({ data }) {
  return (
    <p>{JSON.stringify(data)}</p>
  );
}

function ItemCondition({ condition }) {
  return (
    <p>{condition}</p>
  );
}


function renderItem(item) {
  const itemURL = `/items/${item.id}`;
  return (
    <article>
      <Link to={itemURL}>
        <img src={item.picture} alt={item.title} />
      </Link>
      <Link to={itemURL}>{item.title}</Link>
      <ItemPrice data={item.price} />
      <ItemCondition condition={item.condition} />
    </article>
  );
}

export default function Items({ items }) {
  return (
    <div className="Items">
      {items.map(renderItem)}
    </div>
  );
}
