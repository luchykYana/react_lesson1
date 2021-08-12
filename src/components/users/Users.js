// 1
// - Коротко : отримати всіх юзерів з плейсхолдеру, та відтворити на сторіці
//
//
// створити сервіс (user.service.js) роботи  з users сутностями  з jsonplaceholer (getUsers(),getUser(id)).
//     Використати fetch / axios на вибір
// Створити компонент Users
// На  рівні Users, за допомоги відповідного сервісу,  отримати всі данні та вивести їх використовуючи відповідні компоненти
// Створити компонент User який характеризує окремий об'єкт з масиву.
// Ієрархія компонентів :
//     App-Users->User
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