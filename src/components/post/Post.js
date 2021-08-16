import "./Post.css";

export default function Post({post: {userId, id, title, body}, getCommentsOfPost}) {

    const onClickGetCommentsOfPost = () => {
        getCommentsOfPost(id);
    }


    return (
        <div className={'post'}>
            <h2>{userId}.{id} {title}</h2>
            <p>{body}</p>
            <button onClick={onClickGetCommentsOfPost}>COMMENTS</button>
        </div>
    );
}