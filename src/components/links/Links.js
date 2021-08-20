import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import "./Links.css";
import Cars from "../cars/Cars";
import CreateCarForm from "../createCarForm/CreateCarForm";
import UpdateCar from "../updateCar/UpdateCar";


export default function Links() {
    return (
        <Router>
            <div>
                <div className="links">
                    <Link to={'./'}>Default page</Link>
                    <Link to={'/cars'}>All cars</Link>
                    <Link to={'/create-car'}>Create car</Link>
                    <Link to={'/update-car'}>Update car</Link>
                </div>

                <Route path={'/cars'} render={() => <Cars/>}/>
                <Route path={'/create-car'} render={() => <CreateCarForm/>}/>
                <Route path={'/update-car'} render={() => <UpdateCar/>}/>

            </div>
        </Router>
    );
}