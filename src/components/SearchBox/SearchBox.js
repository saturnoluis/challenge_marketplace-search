import './SearchBox.css';

function handleSubmit(event) {
  event.preventDefault();
}

export default function SearchBox() {
    return(
      <form className="SearchBox" onSubmit={handleSubmit}>
          <input className="SearchBox__input" type="text" placeholder="Nunca dejes de buscar" />
          <button className="SearchBox__button" type="submit">🔎</button>
      </form>  
    );
}