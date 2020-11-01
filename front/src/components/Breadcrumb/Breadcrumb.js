import { Link } from 'react-router-dom';
import './Breadcrumb.css';

export default function Breadcrumb({ trail = [] }) {
  return(
    <nav className="Breadcrumb">
      {trail.map(link => (
        <Link key={link.id} to='/'>{link.name}</Link>
      ))}
    </nav>
  );
}