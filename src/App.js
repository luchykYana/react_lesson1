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

    const initialState = {users: [], posts: [], comments: []};
    let [{users, posts, comments}, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        async function fetchData() {
            let users = await getUsers();
            let posts = await getPosts();
            let comments = await getComments();
            dispatch({type: 'GET_USERS', payload: users});
            dispatch({type: 'GET_POSTS', payload: posts});
            dispatch({type: 'GET_COMMENTS', payload: comments});
        }

        fetchData();

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