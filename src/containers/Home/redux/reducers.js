export default (state = {
    isLoading: false,
}, action = {}) => {
    switch (action.type) {
        case 'TEST':
            return state;
        default:
            return state;
    }
};
