import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import TagsInput from 'react-tagsinput';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { saveNotes, saveNewFormState } from "../../actions/notes_action";


import 'react-tagsinput/react-tagsinput.css';



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

class CardExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };
  }
  
  handleChange = (tags) => {
    this.setState({tags})
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
            <Paper style={style} zDepth={5}>
              <TextField
                hintText="Words to visually identify the note"
              /><br />
              <TextField
                hintText="Words that describe your understanding in few words!"
                multiLine={true}
                rows={2}
                rowsMax={4}
                /><br />
                <TagsInput value={this.state.tags} onChange={this.handleChange} />
              <FloatingActionButton onTouchTap={this.props.saveNotes} style={button_style}>
                <ContentAdd />
              </FloatingActionButton>
            </Paper>   
          </div>
      </MuiThemeProvider>
      
    );
  }
}


function mapStateToProps(state) {
  return {
    new_note: state.new_note
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, { saveNotes: saveNotes }, { saveNewFormState: saveNewFormState }), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CardExampleControlled);