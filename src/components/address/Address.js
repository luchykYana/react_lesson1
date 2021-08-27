import Geo from "../geo/Geo";

export default function Address({address: {street, suite, cite, zipcode, geo}}) {
    return (
        <div>
            <ul>
                <li>street: {street}</li>
                <li>suite: {suite}</li>
                <li>cite: {cite}</li>
                <li>zipcode: {zipcode}</li>
                <li>geo:<Geo geo={geo}/></li>
            </ul>
        </div>
    );
}