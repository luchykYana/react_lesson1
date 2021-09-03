import Item from "../item/Item";
import './Items.css';

export default function Items({value, onClickDelete, onClickEdit}) {
    return (
        <div className={'items'}>
            {value.map(item => <Item value={item} onClickDelete={onClickDelete} onClickEdit={onClickEdit}/>)}
        </div>
    );
}