import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import TagsInput from 'react-tagsinput';

import 'react-tagsinput/react-tagsinput.css';



injectTapEventPlugin();

const style = {
      height: 200,
      width: 400,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };

export default class CardExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      tags: []
    };
  }
  
  handleChange = (tags) => {
    this.setState({tags})
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  defTags = ["a", "bcd", "efg"];
  sourceTags = ["klm", "nop"];

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
            </Paper>   
          </div>
      </MuiThemeProvider>
      
    );
  }
}