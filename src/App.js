
// Є три лінки
// /users-page
// /posts-page
// /comments-page
// При кліку на відповідну лінку відбувається перехід на відповідний компонент,
//     який дістає з jsonplaceholder інформацію про відповідні стуності, та виводить їх повний список

import './App.css';
import Links from "./components/links/Links";

export default function App() {
  return (
    <div>

    <Links/>

    </div>
  );
}