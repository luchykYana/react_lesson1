import "./Post.css";

export default function Post({postItem: {userId, id, title, body}}) {
  return (
    <div className={'post'}>
      <h2>{userId}.{id} {title}</h2>
      <p>{body}</p>
    </div>
  );
}