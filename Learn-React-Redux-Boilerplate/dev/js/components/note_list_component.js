import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { NoteComponent } from './note_component';
import GridListExampleSingleLine from './note_grid_list';

export default class NoteListComponent extends Component {
    
    // mappedNotes() {
    //     if (this.props.all_notes.notes.length) {
    //             return this.props.all_notes.notes.map((note) => {
    //                 console.log("returning " + note._source.front);
    //                 return (
    //                     <li key={note._id}>
    //                         <NoteComponent note={note}/>
    //                     </li>
    //                 );
    //             })    
    //         } else {
    //             return " ";
    //         }
        
    // }    

    render() {
        return (
            <MuiThemeProvider>
                    <GridListExampleSingleLine />
            </MuiThemeProvider>
        );
    }
}

