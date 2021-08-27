import {useEffect, useReducer} from "react";
import {getPosts} from "../../services/post.api.service";
import Post from "../post/Post";
import './Posts.css';

export default function Posts({posts}) {

    return (
        <div className={'posts'}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
}