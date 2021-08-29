import "./Users.css";
import User from "../User/User";

export default function Users({users}) {
    return (
        <div className={'users'}>
            Users...
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
}