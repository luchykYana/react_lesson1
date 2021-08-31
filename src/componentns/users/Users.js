import User from "../user/User";
import './Users.css';

export default function Users({users}) {
    return (
        <div className={'users'}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
}