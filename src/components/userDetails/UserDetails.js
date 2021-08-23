import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getUser} from "../../services/user.api.server";
import "./UserDetails.css";
import Address from "../address/Address";
import Company from "../company/Company";

export default function UserDetails() {

    let {id} = useParams();

    let [user, setUser] = useState({});

    useEffect(() => {
        getUser(id).then(value => setUser({value}));
    }, [id]);

let {value:{name, username, email, phone, website}} = user;

    // let {value: {name, username, email, address, phone, website, company}} = user;

    // let {value} = user;

    return (
        <div className={'user-details'}>
            <h2>{id}. {name} {username}</h2>
            <h3>email: {email}</h3>
            {/*<h3>address: <Address address={address}/></h3>*/}
            <h3>phone: {phone}</h3>
            <h3>website: {website}</h3>
            {/*<h3>company: <Company company={company}/></h3>*/}
        </div>
    );
}