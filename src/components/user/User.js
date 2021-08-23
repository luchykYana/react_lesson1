import {useHistory} from "react-router";
import "./User.css";

export default function User({user}) {
    let history = useHistory();
    let navigate = () => {
        history.push(
            '/users/' + user.id,
            user
        );
    };
    return (
        <div className={'user'}>
            <div className={'user-name'}>{user.id}. {user.name}</div>
            <button className={'btnUser'} onClick={navigate}>user details</button>
        </div>
    );
}