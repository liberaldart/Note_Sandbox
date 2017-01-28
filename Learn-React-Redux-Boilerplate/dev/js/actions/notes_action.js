import axios from 'axios';

export const fetchNotes = () => {
    return (dispatch) => {
        axios.get("http://localhost:9200/subject/note/_search")
        .then((response) => {
            dispatch({type: "FETCH_NOTES_FULFILLED", payload: response.data});
        })
        .catch((err) => {
            dispatch({type: "FETCH_NOTES_REJECTED", payload: err});
        })
    }
}


export const saveNewFormState = (new_form_content) => {
    if (new_form_content) {
        return {
            type: "SAVE_FORM_TO_STATE_LOCALLY",
            payload: new_form_content
        }
    }
}

export const saveNotes = (new_note_data) => {
    return (dispatch) => {
        axios.post("http://localhost:9200/subject/note", new_note_data
        ).then((response) => {
                dispatch({ type: "SAVE_NOTES_FULFILLED" });
        })
        .catch((err) => {
                dispatch({ type: "SAVE_NOTES_REJECTED", payload: err });
        })
    }
}