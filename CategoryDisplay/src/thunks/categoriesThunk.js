import axios from "axios";

export async function getCategoriesAsync(dispatch, getState) {
    const stateBefore = getState();
    console.log("Categories before dispatch ", stateBefore);
    const response = await axios.get("http://127.0.0.1:3001/categories");
    await response.data;
    await dispatch({ type: "GET_CATEGORIES", payload: response.data });
    const stateAfter = getState();
    console.log("Categories after dispatch ", stateAfter); 
}