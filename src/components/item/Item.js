import './Item.css';

export default function Item({value: {title, description}, onClickDelete, onClickEdit}) {
    let onClickDeleteItem = () => {
        onClickDelete(title, description);
    };
    let onClickEditItem = () => {
        onClickEdit(title, description);
    };
    return (
        <div className={'item'}>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={onClickDeleteItem}>Delete</button>
            <button onClick={onClickEditItem}>Edit</button>
        </div>
    );
}