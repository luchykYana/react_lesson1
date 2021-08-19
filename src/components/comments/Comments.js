import "./Comments.css";
import {useEffect, useState} from "react";
import {getComments} from "../../services/comment.api.service";
import Comment from "../comment/Comment";

export default function Comments() {
  let [comments, setComments] = useState([]);

  useEffect(() => {
    getComments().then(value => setComments([...value]));
  }, [])

  return (
      <div className={'comments'}>
        {
          comments.map(comment => <Comment key={comment.id} comment={comment}/>)
        }
      </div>
  );
}