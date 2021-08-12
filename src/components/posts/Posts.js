// 2
// - Коротко : отримати всі пости з плейсхолдеру, та відтворити на сторіці
//
//
// створити сервіс (post.service.js) роботи  з post сутностями  з jsonplaceholer (getPosts(),getPost(id)).
//     Використати fetch / axios на вибір
// Створити компонент Posts
// На  рівні Posts, за допомоги відповідного сервісу,  отримати всі данні та вивести їх використовуючи відповідні компоненти
// Створити компонент Post який характеризує окремий об'єкт з масиву.
// Ієрархія компонентів :
//     App-Posts->Post

import "./Posts.css";
import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getAxiosPosts} from "../../services/post.service";

export default function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getAxiosPosts().then(({data}) => setPosts([...data]))
    }, []);

    return (
        <div className={'posts'}>
            {
               posts.map(postItem => <Post key={postItem.id} postItem={postItem}/>)
            }
        </div>
    );
}