import './Breadcrumb.css';

export default function Breadcrumb({ trail }) {
  return(
    <div>
      {JSON.stringify(trail)}
    </div>
  );
}