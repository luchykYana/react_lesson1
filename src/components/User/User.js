import "./User.css";
export default function User({user: {id, name, username}}) {
    return (
        <div className={'user'}>
            <div>{id}. {name} {username}</div>
        </div>
    );
}