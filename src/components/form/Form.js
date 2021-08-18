import "./Form.css";
import {patchCar, saveCar} from "../../services/car.api.service";
import Cars from "../cars/Cars";
import {useState} from "react";

export default function Form() {

    let [id, setId] = useState();
    let [model, setModel] = useState('');
    let [price, setPrice] = useState();
    let [year, setYear] = useState();

    let onFormSubmit = (e) => {
        // e.preventDefault();
        let carToSave = {model: model, price: price, year: year};
        saveCar(carToSave);
    };

    let onClickEditCar = () => {
        patchCar(id, model, price, year);
    }

    let patchCarFunc = (id, model, price, year) => {
        setId(id);
        setModel(model);
        setPrice(price);
        setYear(year);
    }


    let onChangeModel = (e) => {
        setModel(e.target.value);
    };
    let onChangePrice = (e) => {
        setPrice(e.target.value);
    };
    let onChangeYear = (e) => {
        setYear(e.target.value);
    };

    return (
        <div>
            <form /*onSubmit={onFormSubmit}*/ className={'form'}>
                <div>
                    <h4>Model:</h4> <input type="text" name={"model"} value={model} placeholder={'enter model'} onChange={onChangeModel}/>
                </div>

                <div>
                    <h4>Price:</h4> <input type="text" name={"price"} value={price} placeholder={'enter price'} onChange={onChangePrice}/>
                </div>

                <div>
                    <h4>Year:</h4> <input type="text" name={"year"} value={year} placeholder={'enter year'} onChange={onChangeYear}/>
                </div>

                <button className={'btnSaveCar'} onClick={onFormSubmit}>SAVE</button>
                <button className={'btnEditCar'} onClick={onClickEditCar}>EDIT</button>

            </form>

            <Cars patchCarFunc={patchCarFunc}/>

        </div>
    );
}