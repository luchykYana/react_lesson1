import "./Form.css";
import {saveCar} from "../../services/car.api.service";


export default function Form() {

    let onFormSubmit = (e) => {
        // e.preventDefault();
        let carToSave = {model: e.target.model.value, price: e.target.price.value, year: e.target.year.value};
        saveCar(carToSave);
    };

    return (
        <div>
            <form onSubmit={onFormSubmit} className={'form'}>
                <div>
                    <h4>Model:</h4> <input type="text" name={"model"} placeholder={'enter model'}/>
                </div>
                <div>
                    <h4>Price:</h4> <input type="text" name={"price"} placeholder={'enter price'}/>
                </div>
                <div>
                    <h4>Year:</h4> <input type="text" name={"year"} placeholder={'enter year'}/>
                </div>
                <button className={'btnSaveCar'}>SAVE</button>
            </form>

        </div>
    );
}