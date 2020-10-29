import './ItemsRenderer.css';

export default function ItemsRenderer({ loading, items = [] }) {
  if(loading) {
    return(<p>Loading items...</p>);
  }

  return (
    <ul>
      <li>Items...</li>
    </ul>
  );
}