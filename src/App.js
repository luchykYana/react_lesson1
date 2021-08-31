import './App.css';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Items from "./components/items/Items";

export default function App() {

    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let [infoFromForm, setInfoFromForm] = useState({title: '', description: ''});

    let onChangeForm = (e) => {
        setInfoFromForm({...infoFromForm, [e.target.name]: e.target.value});
    };

    let onSubmitForm = (e) => {
        e.preventDefault();

        dispatch({type: 'TODO', payload: infoFromForm});
    };

    return (
        <div>
            <form onSubmit={onSubmitForm} className={'form'}>
                <input type="text" name={'title'} placeholder={'enter title'} value={infoFromForm.title} onChange={onChangeForm}/>
                <input type="text" name={'description'} placeholder={'enter description'} value={infoFromForm.description} onChange={onChangeForm}/>
                <button disabled={!infoFromForm.title || !infoFromForm.description}>add</button>
            </form>

            <Items value={state}/>

        </div>
    );
}