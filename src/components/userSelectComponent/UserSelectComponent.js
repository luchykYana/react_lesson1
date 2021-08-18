import "./UserSelectComponent.css";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.api.service";

export default function UserSelectComponent({setUserIdFunc}) {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, []);

    let onSelectChange = (e) => {
        const selectChange = e.target.value;
        setUserIdFunc(selectChange);
    };

    return (
        <div>
            <select className={'user-select'} onChange={onSelectChange}>
                <option value="" selected disabled hidden>select a user</option>
                {users.map(user => <option key={user.id} value={user.id}>user {user.id}</option>)}
            </select>
        </div>
    );
}