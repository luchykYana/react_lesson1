import "./Geo.css";

export default function Geo({geo: {lat, lng}}) {
    return (
        <div>
            <ul>
                <li><span className={"geoColor"}>lat:</span> {lat}</li>
                <li><span className={"geoColor"}>lng:</span> {lng}</li>
            </ul>
        </div>
    );
}