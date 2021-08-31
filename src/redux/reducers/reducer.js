let initialState = [];

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'TODO': {
            return [...state, action.payload];
        }
        default:
            return state;
    }
}