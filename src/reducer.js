export default (state, action) => {
    switch (action.type) {
        case 'IS_AUTH':
            return {
                ...state,
                isAuth: true,
                roomID: action.payload.roomID,
                userName: action.payload.userName,
            };
        case 'SET_USERS':
            return {
                ...state,
                users: action.payload,
            };
        case 'SET_MESSAGES':
            return {
                ...state,
                messages: action.payload,
            };
        default:
            return state;
    }
};
