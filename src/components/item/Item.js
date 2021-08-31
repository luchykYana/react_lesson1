import './Item.css';

export default function Item({value: {title, description}}) {
    return (
        <div className={'item'}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}