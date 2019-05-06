import { combineReducers } from 'redux';
import recharge from './recharge';
import simpleReducer from './simpleReducer';

export default combineReducers({
    simpleReducer,
    recharge
});