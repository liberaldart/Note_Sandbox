import React, { Component } from "react";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


export class NoteComponent extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>I love react! </div>
            </MuiThemeProvider>    
        );
    }
}