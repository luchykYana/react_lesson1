import "./Simpson.css";

export default function Simpson({name, surname, age, info, photo}) {
  return (
    <div className={'simpson'}>
        <div className={'left'}>
            <img src={photo} alt="character"/>
        </div>
        <div className="right">
            <h2>{name} {surname}</h2>
            <h3>{age} years old</h3>
            <p>{info}</p>
        </div>
    </div>
  );
}