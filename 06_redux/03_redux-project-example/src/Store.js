import rootReducer from "./modules";
import {createStore} from 'redux';
import { applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    
)
export default store;