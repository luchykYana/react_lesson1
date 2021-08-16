import "./Users.css";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.service";
import {getPostsOfUser} from "../../services/posts.service";
import User from "../user/User";
import Post from "../post/Post";

// 1
// Отримати всі user з jsonplaceholder та вивести їх. до кожного user зробити кнопку при натисканні якої виводиться всі
// пости поточного юзера в межах Users компоненти

export default function Users() {

    let [users, setUsers] = useState([]);
    let [postsOfUser, setPostsOfUser] = useState(null);


    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, [])


    const getPostsOfUserFunc = (id) => {
        getPostsOfUser(id).then(value => setPostsOfUser([...value]));
    }

    const clearPostsOfUser = () => {
        setPostsOfUser(null);
    }


    return (
        <div className={'flex'}>
            <div className={'users'}>
                {
                    users.map(userItem => <User
                        key={userItem.id}
                        user={userItem}
                        getPostsOfUserFunc={getPostsOfUserFunc}
                        clearPostsOfUser={clearPostsOfUser}
                    />)
                }
            </div>
            {
                postsOfUser && <div className={'Posts'}>
                    {postsOfUser.map(post => <Post key={post.id} post={post}/>)}
                </div>
            }
        </div>
    );
}