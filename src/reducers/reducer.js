const reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
        case 'INC':
            return {...state, [action.key]: state[action.key] + 1}
        case 'DEC':
            return {...state, [action.key]: state[action.key] - 1}
        default:
            return state;
    }
}

export default reducer;
