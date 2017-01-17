import React, { Component } from 'react';
import NoteListComponent from '../components/note_list_component';
import { fetchNotes } from '../actions/notes_action';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

class NoteList extends Component {

    componentDidMount() {
        //console.log(this.props);
        this.props.fetchNotes();
    }    

    render() { 
        return (<NoteListComponent all_notes={this.props.notes}/>)
    }
}

function mapStateToProps(state) {
    return {
        notes: state.notes
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchNotes: fetchNotes}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(NoteList);