import React, {Component} from "react";
require('../../scss/style.scss');
import NoteList from '../containers/note_list';
import CardExampleControlled from './enterNotes/create_note_component';

export class App extends Component {
    render() {
        return (
            <div>
                <CardExampleControlled />    
                <NoteList />
            </div>
        ); 
    }
}
