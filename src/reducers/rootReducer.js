import { combineReducers } from 'redux';
import recargaReducer from './recargaReducer';
import simpleReducer from './simpleReducer';

export default combineReducers({
    simpleReducer,
    recargaReducer
});