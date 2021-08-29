import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addUser, getUsers} from "./services/user.api.service";
import {CLEAR_STORE, fetchUsers, pushUser} from "./redux/actions";
import Users from "./components/Users/Users";

export default function App() {

    let [formAddUser, setFormAddUser] = useState({name: ''});
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let {users} = state;

    let onSubmitAddUser = (e) => {
        e.preventDefault()
        addUser(formAddUser).then(value => {
            console.log('saved user ->', value);
            dispatch(pushUser(value));
        })
    };

    let onchangeForm = (e) => {
        setFormAddUser({...formAddUser, [e.target.name]: e.target.value});
    };

    let onClickClearStore = () => {
        dispatch({type: CLEAR_STORE});
    };
    let onClickShowUsers = () => {
        async function getDataUsers() {
            let dateUsers = await getUsers();
            dispatch(fetchUsers([...dateUsers]));
        }

        getDataUsers();
    };

    return (
        <div>
            <div className={'main'}>
                <form onSubmit={onSubmitAddUser} className={'form'}>
                    <input type="text" name={'name'} placeholder={'enter name'} value={formAddUser.name}
                           onChange={onchangeForm}/>
                    <button>add user</button>
                </form>

                <button onClick={onClickClearStore}>clear store</button>
                <button onClick={onClickShowUsers}>users</button>
            </div>

            {<Users users={users}/>}

        </div>
    );
}