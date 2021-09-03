let initialState = [];

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'TODO': {
            return [...state, action.payload];
        }
        case 'DELETE':{
            console.log(state);
            let i = 0;
            state.map(item => {
                if(item.title === action.payload.title && item.description === action.payload.description){
                    state.splice(i, 1);
                }
                i++;
                return [...state];
            })
            return [...state];
        }
        case 'EDIT': {
            console.log(action.payload);
            console.log('edit');
            return [...state];
        }
        default:
            return state;
    }
}