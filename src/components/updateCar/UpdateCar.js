import "./UpdateCar.css";
import {useEffect, useState} from "react";
import {getCar, getCars, patchCar} from "../../services/car.api.service";

export default function UpdateCar() {
    let [cars, setCars] = useState([]);
    let [id, setId] = useState('');
    let [model, setModel] = useState('');
    let [price, setPrice] = useState('');
    let [year, setYear] = useState('');
    let [isUpdate, setIsUpdate] = useState(null);

    useEffect(() => {
        getCars().then(value => setCars([...value]));
    }, [])

    let onSelectChange = async (e) => {
        const selectChange = e.target.value;
        setId(selectChange);
        await getCar(selectChange).then(value => {
            setModel(value.model)
            setPrice(value.price)
            setYear(value.year)
        });
    };

    let onChangeModel = (e) => {
        setModel(e.target.value);
    };
    let onChangePrice = (e) => {
        setPrice(e.target.value);
    };
    let onChangeYear = (e) => {
        setYear(e.target.value);
    };

    let onFormSubmit = (e) => {
        e.preventDefault();
        patchCar(id, e.target.model.value, e.target.price.value, e.target.year.value);
        setIsUpdate(id);
    };

    return (
        <div>
            <select className={'car-select'} onChange={onSelectChange}>
                <option selected disabled hidden>select a car</option>
                {cars.map(car => <option key={car.id} value={car.id}>№{car.id} {car.model}</option>)}
            </select>
            <form onSubmit={onFormSubmit} className={'form'}>
                <div>
                    <h4>Model:</h4> <input type="text" name={"model"} value={model} placeholder={'enter model'} onChange={onChangeModel}/>
                </div>
                <div>
                    <h4>Price:</h4> <input type="text" name={"price"} value={price} placeholder={'enter price'} onChange={onChangePrice}/>
                </div>
                <div>
                    <h4>Year:</h4> <input type="text" name={"year"} value={year} placeholder={'enter year'} onChange={onChangeYear}/>
                </div>
                <button className={'btnUpdateCar'}>Update car</button>
            </form>
            {
                isUpdate && <div className={'message'}>You update car #{isUpdate}. Follow the link "All cars" to make
                    sure the changes have taken place.</div>
            }
        </div>
    );
}