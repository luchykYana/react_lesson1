import "./User.css";
import Address from "../address/Address";
import Company from "../company/Company";
import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/post.service";
import PostsOfUser from "../postsOfUser/PostsOfUser";

export default function User({userItem: {id, name, username, email, address, phone, website, company}}) {
    let [postsOfUser, setPostsOfUser] = useState([]);

    useEffect(() => {

        getPostsOfUser(id).then(value => setPostsOfUser([...value]));
    },[id]);

    return (
    <div className={'user'}>
        <h2>{id}. {name} {username}</h2>
        <h3>email: {email}</h3>
        <h3>address: <Address address={address}/></h3>
        <h3>phone: {phone}</h3>
        <h3>website: {website}</h3>
        <h3>company: <Company company={company}/></h3>
        <PostsOfUser posts={postsOfUser}/>
    </div>

  );
}