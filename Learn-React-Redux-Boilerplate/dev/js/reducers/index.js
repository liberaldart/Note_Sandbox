import userList from './userList';
import { combineReducers } from 'redux';
import { UserSelected } from './selectedUser';

export const allReducers = combineReducers({
    users: userList,
    selected: UserSelected
});

