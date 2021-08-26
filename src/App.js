// є об'єкт, значення якого 0
// Стоврити 2 кнопки.
//     Перша збільшує   значення на 10
// Друга зменшує на 2.
//
// Зміну стану та виведення реалізувати через redcer

import './App.css';
import {useReducer} from "react";
import reducer from "./reducers/reducer";

export default function App() {

    let [state, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h1>{state}</h1>
            <button onClick = {() => dispatch('+')}>increment</button>+10
            <br/>
            <button onClick ={() => dispatch('-')}>decrement</button>-2

        </div>
    );
}
