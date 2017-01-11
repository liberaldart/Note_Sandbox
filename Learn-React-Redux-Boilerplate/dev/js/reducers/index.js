import userList from './userList';
import { combineReducers } from 'redux';
import { UserSelected } from './selectedUser';
import { NoteReducer } from './noteReducer';

export const allReducers = combineReducers({
    users: userList,
    selected: UserSelected,
    notes: NoteReducer
});