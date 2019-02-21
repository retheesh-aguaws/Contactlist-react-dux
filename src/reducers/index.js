import { combineReducers } from 'redux';
import contactlist from './userReducer';

export default combineReducers({
    contactlist: contactlist
});