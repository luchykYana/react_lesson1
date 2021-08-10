import "./Address.css";
import Geo from "../geo/Geo";

export default function Address({address: {street, suite, city, zipcode, geo}}) {
    return (
        <div className={'address'}>
            <ul><b>
                <li><span className={'addressColor'}>street:</span> {street}</li>
                <li><span className={'addressColor'}>suite:</span> {suite}</li>
                <li><span className={'addressColor'}>city:</span> {city}</li>
                <li><span className={'addressColor'}>zipcode:</span> {zipcode}</li>
                <li><span className={'addressColor'}>geo:</span> <Geo geo={geo}/></li>
            </b>
            </ul>
        </div>
    );
}