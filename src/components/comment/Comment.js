export default function Comment({comment: {postId, id, name, email, body}}) {
  return (
    <div>
        <h3>{postId}.{id} {name} </h3>
        <h4>{email}</h4>
        <p>{body}</p>
    </div>
  );
}