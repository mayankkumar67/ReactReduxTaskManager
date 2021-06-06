import {createStore} from 'redux';
import RootReducer from './Reducers/RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(RootReducer,composeWithDevTools());

export default store;