import Comment from "../comment/Comment";
import './Comments.css';

export default function Comments({comments}) {

    return (
        <div className={'comments'}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
}