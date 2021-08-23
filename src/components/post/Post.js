import{
    Link,
} from "react-router-dom";

export default function Post({post}) {
    let {userId, id} = post;
    return (
        <div>
            {userId}.{id} - <Link to={{pathname: '/posts/' + id, state: post}}>post info</Link>
        </div>
    );
}