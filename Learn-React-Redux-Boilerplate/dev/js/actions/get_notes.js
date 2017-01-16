import axios from 'axios';

export const getNotes = () => {
    axios.get("http://localhost:9200/subject/note/_search")
        .then((response) => {
            return { type: "FETCH_NOTES_RECEIVED", payload: response.data };
        })
        .catch((err) => {
            dispatch({ type: "FETCH_NOTES_ERROR", payload: err });
    })

}