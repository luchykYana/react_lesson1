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

    // let postsStyle = {
    //     width: "50%",
    //     fontSize: "9px",
    //     border: "5px solid dodgerblue",
    //     marginTop: "50px",
    //     marginRight: "10px",
    //     marginBottom: "50px",
    //     marginLeft: "5px",
    //     padding: "20px",
    //     height: "625px",
    // }

    const getPostsOfUserFunc = (id) => {
        getPostsOfUser(id).then(value => setPostsOfUser([...value]));

        // let temp = id*625 + "px";
        // Object.assign(postsStyle.marginTop, temp);
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
                postsOfUser && <div /*style={postsStyle}*/ className={'postsStyle'}>
                    {postsOfUser.map(post => <Post key={post.id} post={post}/>)}
                </div>
            }
        </div>
    );
}