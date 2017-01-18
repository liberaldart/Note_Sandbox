import React, { Component } from 'react';

export default class NoteListComponent extends Component {

    mappedNotes() {
        if (this.props.all_notes.notes.length) {
                return this.props.all_notes.notes.map((note) => {
                    console.log("returning " + note._source.front);
                    return (
                        <li key={note._id}> {note._source.front} </li>
                    );
                })    
            } else {
                return " ";
            }
        
    }    

    render() {
        return (
            <div>
             Notes:     
                <ul>
                    {this.mappedNotes()}
                </ul>    
            </div>
        );
    }
}

