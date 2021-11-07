import LineItem from "./LineItem"
const ItemsLits = ({ items, checkHandler, deletHandler }) => {
    return (
    <ul>
    {items.map((item) => (
        <LineItem
        key={item.id}
        item={item}
        checkHandler={checkHandler} 
      deletHandler={deletHandler}/>
    ))}
    </ul>
    )
}

export default ItemsLits
