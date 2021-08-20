import "./Car.css";

export default function Car({car: {id, model, price, year}}) {
    return (
        <div className={'car'}>
            <h2>№{id} {model}</h2>
            <h3>Price: {price}</h3>
            <h3>Year: {year}</h3>
        </div>
    );
}