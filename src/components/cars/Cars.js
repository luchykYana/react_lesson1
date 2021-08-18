import "./Cars.css";
import {useEffect, useState} from "react";
import {deleteCar, getCars} from "../../services/car.api.service";
import Car from "../car/Car";

export default function Cars({patchCarFunc}) {
  let [cars, setCars] = useState([]);

  useEffect(() => {
    getCars().then(value => setCars([...value]));
  },[]);

  let onClickDeleteCar = (id) => {
    deleteCar(id);
    setCars(cars.filter(value => value.id !== id));
  };



  return (
      <div className={'cars'}>
        {
          cars.map(car => <Car key={car.id} car={car} patchCarFunc={patchCarFunc} onClickDeleteCar={onClickDeleteCar}/>)
        }
      </div>
  );
}