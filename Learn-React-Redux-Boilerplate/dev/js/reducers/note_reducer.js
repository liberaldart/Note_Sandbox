export const note_reducer = (state = null, action) => {
    switch (action.type) {
        case "GET_NOTES_STARTED": return action.payload; break;
        case "GET_NOTES_RECEIVED": return action.payload; break;
        case "GET_NOTES_ERROR": return action.payload; break;    
    };

    return state;
}