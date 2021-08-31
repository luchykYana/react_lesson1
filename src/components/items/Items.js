import Item from "../item/Item";
import './Items.css';

export default function Items({value}) {
    return (
        <div className={'items'}>
            {value.map(item => <Item value={item}/>)}
        </div>
    );
}