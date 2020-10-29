import './Items.css';

export default function Items({ items }) {
    return (
        <ul className="Items">
            <li>{JSON.stringify(items)}</li>
        </ul>
    );
}