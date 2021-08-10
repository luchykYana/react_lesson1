import "./Company.css"

export default function Company({company: {name, catchPhrase, bs}}) {
    return (
        <div>
            <ul>
                <b>
                    <li><span className={"companyColor"}>name:</span> {name}</li>
                    <li><span className={"companyColor"}>catchPhrase:</span> {catchPhrase}</li>
                    <li><span className={"companyColor"}>bs:</span> {bs}</li>
                </b>
            </ul>
        </div>
    );
}