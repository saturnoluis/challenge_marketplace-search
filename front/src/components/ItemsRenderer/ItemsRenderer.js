import './ItemsRenderer.css';

export default function ItemsRenderer({ loading, items = [] }) {
  console.log({ loading, items });
  
  if(loading) {
    return(<p>Loading items...</p>);
  }

  return (
    <ul>
      <li>Items...</li>
    </ul>
  );
}