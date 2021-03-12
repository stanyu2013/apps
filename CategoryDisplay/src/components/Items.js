import { useSelector } from "react-redux";
const Items = () => {
    const filteredItems = useSelector(state => state.itemsReducer);
    return (
        <div className="items">
            <h1>Items</h1>
            {filteredItems && filteredItems.constructor === Array && filteredItems.length > 0 ? filteredItems.map(value => {
                return <div className="item-details"><p>{value.item_name}</p><img src={value.image}></img></div>             
            }):""}
        </div>
    )
}
export default Items;