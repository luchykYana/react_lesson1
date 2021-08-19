import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import "./Links.css";
import Users from "../users/Users";
import Posts from "../posts/Posts";
import Comments from "../comments/Comments";

export default function Links() {
    return (
        <Router>
            <div>
                <div className={'links'}>
                    <Link to={'/'}>default-page</Link>

                    <Link to={'/users'}>users-page</Link>

                    <Link to={'/posts'}>posts-page</Link>

                    <Link to={'/comments'}>comments-page</Link>
                </div>

                <Route path={'/users'}>
                    <Users/>
                </Route>

                <Route path={'/posts'} render={() => <Posts/>}/>

                <Route path={'/comments'} component={Comments}/>
            </div>

        </Router>
    );
}