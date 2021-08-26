// створити об'єкт {a:0,b:0,c:0}
// Стоврити 6 кнопок.
//     по дві на кожен з параметрів об'єкту.
// одна кнопка збільшує значення , інша зменшує
// логіку реалізувати через reducer

import './App.css';
import {useReducer} from "react";
import reducer from "./reducers/reducer";

export default function App() {
    const initialState = {a: 0, b: 0, c: 0}
    let [{a, b, c}, dispatch] = useReducer(reducer, initialState);

    return (
        <div className={'main'}>
            <div className={'state'}>
                <h2>state 1 = {a}</h2>
                <button onClick={() => dispatch({key: 'a', type: 'INC'})}>inc</button>
                <button onClick={() => {
                    if (a <= 0) return
                    dispatch({key: 'a', type: 'DEC'})
                }}>dec
                </button>
            </div>
            <div className={'state'}>
                <h2>state 1 = {b}</h2>
                <button onClick={() => dispatch({key: 'b', type: 'INC'})}>inc</button>
                <button onClick={() => {
                    if (b <= 0) return
                    dispatch({key: 'b', type: 'DEC'})
                }
                }>dec
                </button>
            </div>
            <div className={'state'}>
                <h2>state 1 = {c}</h2>
                <button onClick={() => dispatch({key: 'c', type: 'INC'})}>inc</button>
                <button onClick={() => {
                    if (c <= 0) return
                    dispatch({key: 'c', type: 'DEC'})
                }}>dec
                </button>
            </div>
        </div>
    );
}
