import './CreateCarForm.css';
import {saveCar} from "../../services/car.api.service";
import {useState} from "react";

export default function CreateCarForm() {

    let [isCreate, setIsCreate] = useState(null);

    let onFormSubmit = (e) => {
        e.preventDefault();
        let carToSave = {model: e.target.model.value, price: e.target.price.value, year: e.target.year.value};
        saveCar(carToSave);
        setIsCreate(carToSave);
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
            {
                isCreate && <div className={'message'}>You update {isCreate.model} of the year {isCreate.year}. Follow the link "All cars" to make
                    sure the changes have taken place.</div>
            }
        </div>
    );
}