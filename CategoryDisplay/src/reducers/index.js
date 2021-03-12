import categoriesReducer from "./categoriesReducer";
import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";

const allReducers = combineReducers({
    categoriesReducer: categoriesReducer,
    itemsReducer: itemsReducer,
});

export default allReducers;