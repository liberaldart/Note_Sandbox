import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class NoteComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
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

  render = () => {
      return (
          <MuiThemeProvider>
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={this.props.note._source.front}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label="Expand to view details"
          />
        </CardText>
        
        <CardTitle title="Note details" expandable={true} />
        <CardText expandable={true}>
          {this.props.note._source.back}
        </CardText>
        <CardActions>
            <p> {this.props.note._source.tags} </p>
          <FlatButton label="Expand" onTouchTap={this.handleExpand} />
          <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
        </CardActions>
      </Card>    
          </MuiThemeProvider>
      )
  }  
}