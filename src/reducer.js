export default (state, action) => {
    switch (action.type) {
        case 'IS_AUTH':
            return {
                ...state,
                isAuth: true,
                roomID: action.payload.roomID,
                userName: action.payload.userName,
            };
        default:
            return state;
    }
};
