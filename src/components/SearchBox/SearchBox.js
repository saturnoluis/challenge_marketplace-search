import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchBox.css';

export default function SearchBox() {
  const history = useHistory();
  const [ text, setText ] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push({
      pathname: '/items',
      search: `?search=${text}`
    });
  }
  
  return(
    <form className="SearchBox" onSubmit={handleSubmit}>
        <input
          className="SearchBox__input"
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Nunca dejes de buscar"
        />
        <button className="SearchBox__button" type="submit">🔎</button>
    </form>  
  );
}