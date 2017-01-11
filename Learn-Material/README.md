#Created a smart component, aka container in note.js file
#Content:
```
import React, {Component} from "react";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export class Note extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <RaisedButton label="Save" />
            </MuiThemeProvider>   
        )
    }
}
```


# Also added the following lines in index.html:
```
<!-- https://github.com/callemall/material-ui says
    I need to use the following way to
    get certain specific list of
    fonts are used by material design
    . so here it is:
     https://fonts.google.com/?selection.family=Arima+Madurai|Roboto:300,400,500 -->
    <link href="https://fonts.googleapis.com/css?family=Arima+Madurai|Roboto:300,400,500" rel="stylesheet">

# This was the start of material design sandbox in this project
```
