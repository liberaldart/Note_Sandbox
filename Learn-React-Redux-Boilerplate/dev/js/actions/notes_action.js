export let get_notes_started = () => {
    return {
        type: "GET_NOTES_STARTED",
        payload: "ajax request sent"
    }
}

export let get_notes_received = (data) => {
    return {
        type: "GET_NOTES_RECEIVED",
        payload: data
    }
}

export let get_notes_error = (err) => {
    return {
        type: "GET_NOTES_ERROR",
        payload: err
    }
}

export let axios_middleware_notes_actions = () => {
    return {
        types: ['LOAD','AWESOME','OH_NO'],
        payload: {
            request:{
                url:'/note/_search'
            }
        }
  }
}

