import React, { Component } from 'react';

export class NoteListComponent extends Component {
    render() {
        return (
            <div>
                Display notes list:
                {this.props.notes}
                
            </div>
        )
    }
}

