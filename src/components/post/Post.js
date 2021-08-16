import "./Post.css";

export default function Post({post: {userId, id, title, body}, getMorePost, clearPostsOfUser}) {

    const onClickMorePost = () => {
        getMorePost(body, id);
    }

    const onClickClearPostsOfUser = () => {
        clearPostsOfUser();
    }

    return (
        <div className={'post'}>
            <h2>{userId}.{id} {title}</h2>
            <div className="btns">
                <button className={'btnBody'} onClick={onClickMorePost}>MORE</button>
                <button className={'btnBody'} onClick={onClickClearPostsOfUser}>CLEAR</button>
            </div>
        </div>
    );
}