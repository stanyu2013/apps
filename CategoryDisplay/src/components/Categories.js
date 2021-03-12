import { useDispatch, useSelector } from "react-redux";
import getItemsAsync from "../thunks/itemsThunk";
const Categories = () => {
    const dispatch = useDispatch();
    const cats = useSelector(state => state.categoriesReducer);
    return (
        <div className="categories">
            <ul class="categories-list">
                {cats.map(value => {
                    return <li><a onClick={() => dispatch(getItemsAsync(value.id))}>{value.category_name}</a></li>
                    //return <li><a>{value.category_name}</a></li>
                })}
            </ul>
        </div>
    )
}
export default Categories;