import "./Users.css";
import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    },[]);

  return (
    <div className={'users'}>
        {
            users.map(userItem => <User key={userItem.id} userItem={userItem}/>)
        }
    </div>
  );
}