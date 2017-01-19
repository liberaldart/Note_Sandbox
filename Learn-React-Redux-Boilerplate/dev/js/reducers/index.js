import userList from './userList';
import { combineReducers } from 'redux';
import { UserSelected } from './selectedUser';
import { note_reducer } from './note_reducer';
import { new_note_reducer } from './new_note_reducer';


export const allReducers = combineReducers({
    users: userList,
    selected: UserSelected,
    notes: note_reducer,
    new_note: new_note_reducer
});