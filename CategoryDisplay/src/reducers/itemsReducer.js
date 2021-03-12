const initialState = {};

const itemsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_ITEMS": {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
export default itemsReducer;
