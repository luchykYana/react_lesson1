import "./Car.css";

export default function Car({car: {id, model, price, year}, patchCarFunc, onClickDeleteCar}) {

    let onClickPatchCar = () => {
        console.log(patchCarFunc);
        patchCarFunc(id, model, price, year);
    };
    return (
        <div className={'car'}>
            <div className={'infoCar'}>
                <h2>№{id} "{model}"</h2>
                <h3>Price: {price}</h3>
                <h3>Year: {year}</h3>
            </div>
            <div className={'btnsCar'}>
                <button onClick={() => onClickDeleteCar(id)}>DELETE</button>
                <button onClick={onClickPatchCar}>EDIT</button>
            </div>
        </div>
    );

}