import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { saveNotes, saveNewFormState } from "../../actions/notes_action";
import { NewFormComponent } from "../../components/new_note_form_component";

import 'react-tagsinput/react-tagsinput.css';



class CardExampleControlled extends React.Component {

  render() {
    return (
      <NewFormComponent saveNotes={this.props.saveNotes}/>
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