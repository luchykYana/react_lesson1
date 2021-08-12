import PostOfUser from "../postOfUser/PostOfUser";
import {useEffect, useState} from "react";

export default function PostsOfUser({posts}) {

    return (
      <div className={'posts'}>
          <h2>Posts</h2>
          {
              posts.map(postOfUser => <PostOfUser key={postOfUser.id} postOfUser={postOfUser}/>)
          }
      </div>
  );
}