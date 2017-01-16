import React, { Component } from 'react';
import { NoteListComponent } from '../components/note_list_component';
import { bindActionCreators } from 'redux';
import * as notes_actions from '../actions/notes_action';
import { connect } from "react-redux";
import axios from 'axios';

export class NoteList extends Component {

    componentDidMount() {
        console.log("NoteList component loaded already")
        notes_actions.get_notes_started();
        axios.get("http://localhost:9200/subject/note/_search")
        .then((response) => {
            notes_actions.get_notes_received(response.data);
        })
        .catch((err) => {
            notes_actions.get_notes_error(err);
        })
    }    

    render() { 
        
        return (<NoteListComponent notes={this.props.notes}/>)
    }
}

function mapStateToProps(state) {
    return {
        notes: state.notes
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(...notes_actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);