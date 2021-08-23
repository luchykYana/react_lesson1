import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.api.server";
import User from "../user/User";
import {Route} from "react-router-dom";
import UserDetails from "../userDetails/UserDetails";
import "./Users.css";

export default function Users({match: {url}}) {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            let usersList = await getUsers();
            setUsers([...usersList]);
        }

        fetchUsers();

    }, []);

    return (
        <div className={'main'}>
            <div className="users">
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>

            <div className="routeUserDetails">
                <Route path={`${url}/:id`} render={() => {
                    return <UserDetails/>
                }}/>
            </div>
        </div>
    );
}