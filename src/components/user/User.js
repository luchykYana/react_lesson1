import "./User.css";
import Address from "../address/Address";
import Company from "../company/Company";

export default function User({userItem: {id, name, username, email, address, phone, website, company}}) {
    if (+id < 0) {
        throw new Error(`This user does not exist`);
    }
    return (
        <div className={'user'}>
            <h2>{id}. {name} {username}</h2>
            <h3>email: {email}</h3>
            <h3>address:</h3>
            <Address address={address}/>
            <h3>phone: {phone}</h3>
            <h3>website: {website}</h3>
            <h3>company:</h3>
            <Company company={company}/>
        </div>
    );
}