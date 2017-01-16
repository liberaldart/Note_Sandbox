import React, {Component} from "react";

import { getNotes } from '../actions/get_notes';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { NoteComponent } from "../components/note_component";


export class Note extends Component { 

    render() {
        return (
            <NoteComponent />   
        )
    }
}

function mapStateToProps(state) {
    return {
        notes: state.notes
    }
}

function mapDispatchToProps(state) {
    return bindActionCreators({getNotes: getNotes}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);