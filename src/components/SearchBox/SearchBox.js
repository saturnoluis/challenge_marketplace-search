import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './SearchBox.css';

export default function SearchBox() {
  const history = useHistory();
  const { search: searchParam } = useLocation();
  const search = new URLSearchParams(searchParam).get('search');

  const [ userInput, setUserInput ] = useState(search || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push({
      pathname: '/items',
      search: `?search=${userInput}`
    });
  }
  
  return(
    <form className="SearchBox" onSubmit={handleSubmit}>
        <input
          className="SearchBox__input"
          type="text"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          placeholder="Nunca dejes de buscar"
        />
        <button className="SearchBox__button" type="submit">🔎</button>
    </form>  
  );
}