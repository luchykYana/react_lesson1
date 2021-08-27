import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import {useEffect, useReducer} from "react";
import {getUsers} from "./services/user.api.service";
import {getPosts} from "./services/post.api.service";
import {getComments} from "./services/comments.api.service";
import reducer from "./reducers/reducer";

export default function App() {

    let [{users, posts, comments}, dispatch] = useReducer(reducer, {users: [], posts: [], comments: []});

    useEffect(() => {
        async function fetchUsers() {
            let users = await getUsers();
            dispatch({type: 'GET_USERS', payload: users})
        }
        async function fetchPosts() {
            let posts = await getPosts();
            dispatch({type: 'GET_POSTS', payload: posts})
        }
        async function fetchComments() {
            let comments = await getComments();
            dispatch({type: 'GET_COMMENTS', payload: comments});
        }
        fetchUsers();
        fetchPosts();
        fetchComments();

    }, [])

    return (
        <Router>
            <div>
                <div className="links">
                    <Link to={"/"}>default page</Link>
                    <Link to={'/users'}>users page</Link>
                    <Link to={'/posts'}>posts page</Link>
                    <Link to={'/comments'}>comments page</Link>
                </div>

                <Route path={'/users'}><Users users={users}/></Route>
                <Route path={'/posts'}><Posts posts={posts}/></Route>
                <Route path={'/comments'}><Comments comments={comments}/></Route>

            </div>
        </Router>
    );
}