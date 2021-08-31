import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addUser, cleanStore} from "./redux/actions";
import {useState} from "react";
import {fetchGetUsers} from "./services/user.api.service";
import Users from "./componentns/users/Users";

export default function App() {
    let [nameFromForm, setNameFromForm] = useState({name: ''})
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let {users} = state;

    let onSubmitAddUser = (e) => {
        e.preventDefault();
        dispatch(addUser(nameFromForm));
    };

    let onChangeForm = (e) => {
        setNameFromForm({...nameFromForm, [e.target.name]: e.target.value});
    };

    let onClickClearStore = () => {
        dispatch(cleanStore());
    };
    let onClickShowUsers = () => {
        async function getDataUsers() {
            dispatch(fetchGetUsers())
        }

        getDataUsers();
    };


    return (
        <div>
            <div className={'main'}>
                <form onSubmit={onSubmitAddUser} className={'form'}>
                    <input type="text" name={'name'} placeholder={'enter name'} value={nameFromForm.name}
                           onChange={onChangeForm}/>
                    <button>add user</button>
                </form>

                <button onClick={onClickClearStore}>clear store</button>
                <button onClick={onClickShowUsers}>users</button>
            </div>
            <Users users={users}/>
        </div>
    );
}
