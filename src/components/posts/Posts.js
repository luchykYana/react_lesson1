import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.api.server";
import Post from "../post/Post";
import {
    Route,
} from "react-router-dom";
import PostDetails from "../postDetails/PostDetails";

export default function Posts({match: {url}}) {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value]));
    })

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}

            <Route path={`${url}/:id`} render={(props) => <PostDetails {...props}/>}/>
        </div>
    );
}