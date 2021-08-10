// Взяти масив usersList.
//     Створити компонент,котрий характеризує юзера.
//     Створити компонент,котрий характеризує підоб'єкт юзера address. Використати в компоненті юзера.
// Створити компонент,котрий характеризує підоб'єкт адреси юзера geo. Використати в компоненті адреси.
// Вкладеність компонентів : App->Users->User->Address->Geo
// Вивести всі об'єкти з масиву

import './Users.css';
import User from "../user/User";

export default function App() {

    return (
        <div className={'users'}>
            <User i={0}/>
            <User i={1}/>
            <User i={2}/>
            <User i={3}/>
            <User i={4}/>
            <User i={15}/>
            <User i={5}/>
            <User i={6}/>
            <User i={7}/>
            <User i={8}/>
            <User i={9}/>
        </div>
    );
}