import {useEffect, useState} from "react";
import {getCommentsOfUser} from "../../services/comment.service";
import CommentsOfUser from "../commentsOfUser/CommentsOfUser";

export default function PostOfUser({postOfUser: {userId, id, title, body}}) {
    let [commentsOfUser, setCommentOfUser] = useState([]);

    useEffect(() => {

        getCommentsOfUser(id).then(value => setCommentOfUser([...value]));
    },[id]);

    return (
        <div className={'post'}>
            <h3>{userId}.{id} {title}</h3>
            <p>{body}</p>

            <CommentsOfUser commentsOfUser={commentsOfUser}/>
        </div>
    );
}