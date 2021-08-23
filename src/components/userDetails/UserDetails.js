import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getUser} from "../../services/user.api.server";
import "./UserDetails.css";

export default function UserDetails() {

    let {id} = useParams();

    let [user, setUser] = useState({});

    useEffect(() => {
        async function fetchUser() {
            let userItem = await getUser(id);
            setUser({...userItem});
        }

        fetchUser();
    }, [id]);

    let {name, username, email, phone, website} = user;

    return (
        <div className={'user-details'}>
            <h2>{id}. {name} {username}</h2>
            <h3><span className={'blue'}>email:</span> {email}</h3>
            <h3><span className={'blue'}>phone:</span> {phone}</h3>
            <h3><span className={'blue'}>website:</span> {website}</h3>
        </div>
    );
}