import './User.css';

export default function User({user:{name, username}}) {
    return (
        <div className={'user'}>
            {name} {username}
        </div>
    );
}