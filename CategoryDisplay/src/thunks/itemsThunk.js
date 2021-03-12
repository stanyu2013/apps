import axios from "axios";
//export async function getItemsAsync(dispatch, getState, id) {
const getItemsAsync = id => async (dispatch, getState) => {
    const stateBefore = getState();
    console.log("Items before dispatch ", stateBefore);
    console.log("id ", id);
    const response = await axios.get("http://127.0.0.1:3001/items/" + id);
    await response.data;
    await dispatch({ type: "SET_ITEMS", payload: response.data });
    const stateAfter = getState();
    console.log("Items after dispatch ", stateAfter);
};
export default getItemsAsync;