import './User.css';
import Address from "../address/Address";
import Company from "../company/Company";

export default function User({user: {id, name, username, email, address, phone, website, company}}) {

    return (
        <div className={'user'}>
            <h2>{id}. {name} {username}</h2>
            <h3>email: {email}</h3>
            <div><h3>address:</h3> <Address address={address}/></div>
            <h3>phone: {phone}</h3>
            <h3>website: {website}</h3>
            <div><h3>company:</h3> <Company company={company}/></div>
        </div>
    );
}