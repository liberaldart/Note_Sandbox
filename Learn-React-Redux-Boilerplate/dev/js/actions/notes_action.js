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