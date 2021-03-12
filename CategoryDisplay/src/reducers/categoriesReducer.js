// export default categoriesReducer;
const initialState = {};
const categoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_CATEGORIES": {
            console.log('get categories ', action.payload);
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
export default categoriesReducer;

