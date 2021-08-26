const reducer = (state, action) => {
    switch (action){
        case '+':
            return state+10;
        case '-':
            return state-2;
        default:
            return state;
    }
}

export default reducer;
