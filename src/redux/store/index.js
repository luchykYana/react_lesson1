import {createStore} from 'redux';
import {reducerUser} from "../reducers/reducerUser";

export let store = createStore(reducerUser);