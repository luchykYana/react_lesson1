import{
    Link,
} from "react-router-dom";
import "./Post.css";

export default function Post({post}) {
    let {userId, id} = post;
    return (
        <div className={'post'}>
            {userId}.{id} - <Link to={{pathname: '/posts/' + id, state: post}}>post info</Link>
        </div>
    );
}