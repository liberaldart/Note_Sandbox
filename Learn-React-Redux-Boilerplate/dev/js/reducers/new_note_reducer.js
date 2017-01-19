export const new_note_reducer = (state = {
    tags: [],
    saving: false,
    saved: false,
    error: null,
    front: "",
    back: ""
}, action) => {
    switch (action.type) {
        case "SAVE_NOTES":
            return { saving: true };
            break;
        case "SAVE_NOTES_FULFILLED":
            return { saved: true, saving: false };
            break;
        case "SAVE_NOTES_REJECTED":
            return { saved: false, saving: false, error: action.payload };
            break;
        case "SAVE_FORM_TO_STATE_LOCALLY":
            return action.payload;
            break;
    }
    return state;
}