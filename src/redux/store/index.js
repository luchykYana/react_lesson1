import {createStore, applyMiddleware} from 'redux';
import {reducerUser} from "../reducers";
import ReduxThunk from "redux-thunk";

export let store = createStore(reducerUser, applyMiddleware(ReduxThunk));