export default function PostDetails({location: {state: {userId, id, title, body}}}) {

    return (
        <div>
            <h2>{userId}.{id} {title}</h2>
            <p>{body}</p>

        </div>
    );
}