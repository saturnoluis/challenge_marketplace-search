import Item from './Item';
import './ProductList.css';

export default function Items({ items = [] }) {
  return (
    <div className="ProductList">
      {items.map(data => <Item key={data.id} data={data} />)}
    </div>
  );
}
