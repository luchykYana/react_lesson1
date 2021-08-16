// 1
// Отримати всі пости з jsonplaceholder та вивести їх. до кожного поста зробити кнопку при натисканні якої виводиться
// біль детальна інформація про пост в середині Posts компоненти
//
// 2
// Отримати всі коментарі з jsonplaceholder та вивести їх. до кожного поста зробити кнопку при натисканні якої
// виводиться біль детальна інформація про коментар в середині Comments компоненти

import "./Posts.css";
import {useEffect, useState} from "react";
import {getCommentsOfPost, getPosts} from "../../services/posts.service";
import Post from "../post/Post";
import Comment from "../comment/Comment";

export default function Posts() {

    let [posts, setPosts] = useState([]);
    let [commentsOfPost, setCommentsOfPost] = useState(null);

    useEffect(() => {
        getPosts().then(value => setPosts([...value]));
    })

    const getCommentsOfPostFunc = (id) => {
        getCommentsOfPost(id).then(value => setCommentsOfPost([...value]));
    }

    return (
        <div className={'posts'}>
            {
                posts.map(post => <Post
                    key={post.id}
                    post={post}
                    getCommentsOfPost={getCommentsOfPostFunc}
                />)
            }

            {commentsOfPost && <div className={'commentsOfUser'}>
                {
                    commentsOfPost.map(comment => <Comment
                        key={comment.id}
                        comment={comment}/>)
                }
            </div>
            }
        </div>
    );
}