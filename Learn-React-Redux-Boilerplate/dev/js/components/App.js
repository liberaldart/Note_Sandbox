import React, {Component} from "react";
require('../../scss/style.scss');
import NoteList from '../containers/note_list';
import CardExampleControlled from '../containers/enterNotes/create_note_component';

export class App extends Component {
    render() {
        return (
            <div>
            <p>Resource List</p>    
                <NoteList />    
                <CardExampleControlled />    
            <p>Note List</p>
                <NoteList />
            </div>
        ); 
    }
}
