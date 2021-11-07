import { FaPlus } from "react-icons/fa"
import { useRef } from "react"
const AddItem = ({ newItem, setNewItem, newItemHandler }) => {
    const inputRaf = useRef();
    return (
        <form className='addForm' onSubmit={newItemHandler}>
            <label htmlFor='addItem'>Add Item </label>
            <input 
                autoFocus
                ref={inputRaf}
                id='addItem'
                type='text'
                required
                value={newItem}
                placeholder='Add'
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Add Item'
                onClick={()=> inputRaf.current.focus()}
            >
                <FaPlus/>
            </button>
        </form>
    )
}

export default AddItem
