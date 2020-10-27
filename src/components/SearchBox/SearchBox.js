import './SearchBox.css';

export default function SearchBox() {
    return(
      <form className="SearchBox">
          <input className="SearchBox__input" type="text" placeholder="Nunca dejes de buscar" />
          <button className="SearchBox__button">
            🔎
          </button>
      </form>  
    );
}