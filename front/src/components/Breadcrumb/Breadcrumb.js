import { Link } from 'react-router-dom';
import './Breadcrumb.css';

export default function Breadcrumb({ trail }) {
  const trailLinks = trail.map(link => (<Link to="/">{link.name}</Link>));

  return(
    <nav className="Breadcrumb">
      {trailLinks}
    </nav>
  );
}