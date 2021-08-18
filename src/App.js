// сверху страницы у вас должна быть форма для записи/редактирования машин
// под формой должны выводится машинки
// у каждой машинки должно быть 2 кнопки delete и edit:
//     - по нажатии на кнопку delete машина должна удалятся с базы данных и со списка выведенных машин
// - по нажатии на кнопку edit, форма должна заполнится данными выбранной машины с последующим обновлением и
// сохранением в базу данных
//
// документация и API обновлена и находится по одной их ссылок:
//     http://195.72.146.25/
//         http://192.168.1.253/
//
//
//             Створити форму з select.
//     Отримати всіх юзерів з плейсхолдеру. option для кожного юзера.
//     Оборавши конкретного юзера в цьому select відтворити його пости рівні App
// Ієрархія
// App-UserSelectComponent
// App-Posts-Post

import './App.css';
// import Form from "./components/form/Form";
// import Cars from "./components/cars/Cars";
import UserSelectComponent from "./components/userSelectComponent/UserSelectComponent";
import Posts from "./components/posts/Posts";
import {useState} from "react";

export default function App() {

    let [userId, setUserId] = useState(null);

    let setUserIdFunc = (id) => {
        setUserId(id);
    }

    return (

        <div>

            {/*Розкоментувати для завдання про машини*/}
            {/*<Form/>*/}
            {/*<Cars/>*/}


            {/*Розкоментувати для завдання про користувачів*/}
            {/*<UserSelectComponent setUserIdFunc={setUserIdFunc}/>*/}
            {/*{userId && <Posts id={userId}/>}*/}

        </div>
    );
}