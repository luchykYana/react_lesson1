import './CommentsOfUser.css';
import CommentOfUser from "../commentOfUser/CommentOfUser";

export default function CommentsOfUser({commentsOfUser}) {
  return (
    <div className={'comments'}>
      <h2>Comments</h2>
      {
        commentsOfUser.map(comment => <CommentOfUser key={comment.id} comment={comment}/>)
      }
    </div>
  );
}