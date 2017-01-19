import React, {Component} from 'react';
import TagsInput from 'react-tagsinput';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

injectTapEventPlugin();



const style = {
      height: 200,
      width: 400,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
};
    
const button_style = {
  marginRight: 20,
};



export class NewFormComponent extends Component {
    constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };
  }
  
  handleChange = (tags) => {
    this.setState({tags})
  }

  handleFrontTextField = (event, newValue) => {
      this.setState({front: newValue})
  }

  handleBackTextField = (event, newValue) => {
      this.setState({back: newValue})
  }  

  saveNotes = () => {
      this.props.saveNotes(this.state);
  }  
    
  render = () => {
    return (
        <MuiThemeProvider>
        <div>
            <Paper style={style} zDepth={5}>
              <TextField
                        hintText="Words to visually identify the note"
                onChange = {this.handleFrontTextField}        
              /><br />
              <TextField
                hintText="Words that describe your understanding in few words!"
                multiLine={true}
                rows={2}
                rowsMax={4}
                onChange = {this.handleBackTextField}                
                /><br />
                <TagsInput value={this.state.tags} onChange={this.handleChange} />
              <FloatingActionButton onTouchTap={this.saveNotes} style={button_style}>
                <ContentAdd />
              </FloatingActionButton>
            </Paper>   
          </div>
      </MuiThemeProvider>
    )
    }
} 