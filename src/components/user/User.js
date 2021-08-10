import "./User.css";
import Address from "../address/Address";
import Company from "../company/Company";

export default function User({id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website,
                                 companyName, companyCatchPhrase, companyBs}) {
    return (
        <div className={'user'}>
            <h2>{id}. {name} {username}</h2>
            <h3><span className={"userColor"}>email:</span> {email}</h3>
            <h3><span className={'userColor'}>address:</span> </h3>
            <Address street={street} suite={suite} city={city} zipcode={zipcode} lat={lat} lng={lng}/>
            <h3><span className={'userColor'}>phone:</span> {phone}</h3>
            <h3><span className={'userColor'}>website:</span> {website}</h3>
            <h3><span className={'userColor'}>company:</span> </h3>
            <Company name={companyName} catchPhrase={companyCatchPhrase} bs={companyBs}/>
        </div>
    );
}