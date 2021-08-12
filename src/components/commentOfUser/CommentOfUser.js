export default function CommentOfUser({comment: {postId, id, name, email, body}}) {
    return (
        <div className={'comment'}>
            <h3>{postId}.{id} {name}</h3>
            <h3>email: {email}</h3>
            <p>{body}</p>
        </div>
    );
}