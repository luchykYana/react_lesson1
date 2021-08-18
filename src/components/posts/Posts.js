import "./Posts.css";
import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/user.api.service";
import Post from "../post/Post";

export default function Posts({id}) {
    let [postsOfUser, setPostsOfUsers] = useState([]);

    useEffect(() => {
        getPostsOfUser(id).then(value => setPostsOfUsers([...value]));
    }, [id]);

    return (
        <div className={'posts'}>
            {
                postsOfUser.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
}