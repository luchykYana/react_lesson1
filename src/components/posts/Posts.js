// 1
// Отримати всі пости з jsonplaceholder та вивести їх. до кожного поста зробити кнопку при натисканні якої виводиться
// біль детальна інформація про пост в середині Posts компоненти
//
// 2
// Отримати всі коментарі з jsonplaceholder та вивести їх. до кожного поста зробити кнопку при натисканні якої
// виводиться біль детальна інформація про коментар в середині Comments компоненти

import "./Posts.css";
import {useEffect, useState} from "react";
import {getComments, getCommentsOfPost, getPosts} from "../../services/posts.service";
import Post from "../post/Post";
import Comment from "../comment/Comment";

export default function Posts() {

    let [posts, setPosts] = useState([]);
    let [postInfo, setPostInfo] = useState(null);
    let [comments, setComments] = useState([]);
    let [commentsOfPost, setCommentsOfPost] = useState([]);
    let [postId, setPostId] = useState(0);

    useEffect(() => {
        getPosts().then(value => setPosts([...value]));
    })

    useEffect(() => {
        getComments().then(value => setComments([...value]));
    })
    const getMorePost = (Info, id) => {
        setCommentsOfPost(null);
        setPostInfo(Info);
        setPostId(id);
    }

    const clearPostsOfUser = () => {
        setPostInfo(null);
        setCommentsOfPost(null);

    }

    const getCommentsOfPostFunc = () => {
         getCommentsOfPost(postId).then(value => setCommentsOfPost([...value]));
    }

    return (
        <div>
        <div className={'all'}>
            <div className={'posts'}>
                {
                    posts.map(post => <Post
                        key={post.id}
                        post={post}
                        getMorePost={getMorePost}
                        clearPostsOfUser={clearPostsOfUser}
                    />)
                }
            </div>

            <div>
                {
                postInfo && <div className={'body'}>
                    <p>POST INFO: {postInfo}</p>
                    <button className={'btnComments'} onClick={getCommentsOfPostFunc}>COMMENTS OF POST</button>
                    {
                        commentsOfPost && <div>{
                            commentsOfPost.map(comment => <Comment key={comment.id} comment={comment}/>)
                        }</div>
                    }
                </div>
                }
            </div>

        </div>
            <div>
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                }
            </div>
        </div>
    );
}
