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


/**
 * We define one action for every field.
 * On receiving the action in reducer we update the state for that field
 * And once we get the action to save the form data in the backend database,
 * then we get the state content and send it across
 */

export const saveNewFormState = (new_form_content) => {
    if (new_form_content) {
        return {
            type: "SAVE_FORM_TO_STATE_LOCALLY",
            payload: new_form_content
        }
    }
}

export const saveNotes = () => {
    return (dispatch) => {
        axios.post("http://localhost:9200/subject/note", {
                "front": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                "back": "The state of the app is stored in one single object called state object or state tree",
                "data": "Understand Redux",
                "created": "2017-01-07",
                "revised": "2017-01-07",
                "status": "new",
                "tags": "react, redux, frontend",
                "erased": false
            }
        ).then((response) => {
                dispatch({ type: "SAVE_NOTES_FULFILLED" });
        }).catch((err) => {
                dispatch({ type: "SAVE_NOTES_REJECTED", payload: err });
        })
    }
}