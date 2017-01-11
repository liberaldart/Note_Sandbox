export const NoteReducer = (state = null, action) => {
    switch (action.type) {
        case "FETCH_NOTES_RECEIVED":
            console.log(JSON.stringify(action.payload));
            return action.payload;
            break;
    };
    return state;
}