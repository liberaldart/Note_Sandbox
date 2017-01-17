export const note_reducer = (state = {
    notes: {},
    fetching: false,
    fetched: false,
    error: null
}, action) => {
    switch (action.type) {
        case "FETCH_NOTES":
            return { fetching: true };
            break;
        case "FETCH_NOTES_FULFILLED":
            return { fetched: true, fetching: false, notes: action.payload.hits.hits };
            break;
        case "FETCH_NOTES_REJECTED":
            return { fetched: false, fetching: false, error: action.error };
            break;
    }
    return state;
}