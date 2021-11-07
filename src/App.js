import Header from "./components/Header";
import AddItem from "./components/AddItem";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Main from "./components/Main";
import apiResquest from "./components/apiRequest";
import { useState, useEffect} from'react'
function App() {
  const API_URL ='http://localhost:3500/items';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] =  useState('')
  const [search, setSearch] = useState('')
  const [fetchError, setFetchErorr] = useState(null)
  const [isLoading,setIsLoading] = useState(true)

 
   useEffect(() =>{
    const fetchItems = async () => {
      try{
          const response = await fetch(API_URL)
        if(!response.ok) throw Error('Something went wrong data was not received')
          const listItems = await response.json()
        console.log(listItems);
        setItems(listItems)
        setFetchErorr(null);
      } catch(err){
        setFetchErorr(err.message);
      } finally{
        setIsLoading(false)
      }
    }
      setTimeout(()=>{
        fetchItems()
      },2000)

  },[])

 

  const addItem = async (item)=>{
    const id = items.length ? items[items.length - 1].id + 1: 1;
    const myNewItem = { id, checked: false, item}
    const listItems = [...items, myNewItem];
   setItems(listItems)

   const postOptions = {
     method:'POST',
     headers: {
      'Content-Type':'application/json'
     },
     body: JSON.stringify(myNewItem)
    }

   const result = await apiResquest(API_URL, postOptions);
    if(result) setFetchErorr(result)
  }

  const checkHandler = async (id) =>{
    const listItems = items.map((item) => item.id===id ? {...item,
       checked: !item.checked}:item)
      setItems(listItems)

      const myItem = listItems.filter((item) => item.id === id);
      const updateOptions ={
        method:'PATCH',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({ checked:myItem[0].checked})
      };
      const reqUrl = `${API_URL}/${id}`;
      const result = await apiResquest(reqUrl,updateOptions);
      if(result) setFetchErorr(result)
  }

  const deletHandler =  async (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)

    const deleteOptions = { method:'DELETE' }
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiResquest(reqUrl,deleteOptions);
      if(result) setFetchErorr(result)
  }

  const newItemHandler = (e) =>{
    e.preventDefault()
    if(!newItem) return
    addItem(newItem)
    setNewItem('')
    
  }

  return (
    <div className="App">
      <Header title='Item List' />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        newItemHandler={newItemHandler}
        />
        <Search
        search={search}
        setSearch={setSearch}
          />
        <div  className="main">
        <div className="loading"></div>
      <Main
        isLoading={isLoading}
        fetchError={fetchError}
        items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
        setItems={setItems}
        checkHandler={checkHandler} 
        deletHandler={deletHandler}
      />
      </div>
      <Footer 
         length={items.length}
      />
     
    </div>
  );
}

export default App;
