import {FaTrashAlt} from 'react-icons/fa'
const LineItem = ({ item, checkHandler, deletHandler }) => {
    return (
        <li className="item" key={item.id}>
        <input 
            type="checkbox"
            onChange={()=> checkHandler(item.id)}
            checked={item.checked}
            />
            <label className="la">{item.item}  </label>
            <FaTrashAlt 
            onClick={()=>deletHandler(item.id)}
            role='button'
            tabIndex='0'
            aria-label={`Delete ${item.item}`}
            
            />
        </li>
    )
}

export default LineItem
