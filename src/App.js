// Є дві лінки
// /users
// /posts
//
// /users - робить все те, що було на занятті останнім способом (через кнопку та ддатковий запит на сервер)
//
// /posts
// Отримує posts з jsobplaceholder, виводить їх всі.
//     Біля кожного поста зробити лінку (не конопку) яка буде вести на детальну інформацію поста. Детальну інформацію
// отримувати через history.state

import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

export default function App() {
    return (
        <Router>
            <div className={'links'}>
                <Link to={'/users'}>users page</Link>
                <Link to={'/posts'}>posts page</Link>
            </div>

            <Route path={'/users'} component={Users}/>
            <Route path={'/posts'} component={Posts}/>

        </Router>
    );
}
