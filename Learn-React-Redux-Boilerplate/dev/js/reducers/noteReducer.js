export const NoteReducer = (state = null, action) => {
    let notes_array = null;
    switch (action.type) {
        case "FETCH_NOTES_RECEIVED":
            console.log(JSON.stringify(action.payload));
            notes_array =  action.payload.hits.hits;
            break;
    };

    if (notes_array != null) return notes_array;
    
    return state;
}