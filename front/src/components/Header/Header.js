import { Link } from 'react-router-dom';
import SearchBox from '../SearchBox';
import './Header.css';

export default function Header() {
  return (
    <header className="Header">
      <Link className="Header__logo" to="/">
        <img src="/logo.webp" alt="Mercadolibre" />
      </Link>
      <SearchBox />
    </header>
  );
}
