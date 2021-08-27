import './Comment.css';
export default function Comment({comment: {postId, id, name, email, body}}) {
    return (
        <div className={'comment'}>
            <h2>{postId}.{id} {name}</h2>
            <h3>{email}</h3>
            <p>{body}</p>
        </div>
    );
}