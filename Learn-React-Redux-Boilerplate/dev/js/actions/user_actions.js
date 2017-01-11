export const selectUser = (user) => {
    console.log("clicked:" + user.name);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};