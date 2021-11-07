import ItemsLits from './ItemsLits';

function Main({items, checkHandler, deletHandler, isLoading , fetchError}) {
  
  // moving the code for the app 
  const check =() =>{
    if(isLoading && !fetchError ){
      return <p>Loading Items...</p>
    } else if( fetchError){

      return `❌Erorr: ${fetchError}`
      
    }else{
      return <p>List is Empty</p>
    }


  }
  return (
    <>
      {items.length ? (
        <ItemsLits
        items={items}
        checkHandler={checkHandler}
        deletHandler={deletHandler}
        />
      ):<h4 className='emptyli'>{check()} </h4>}
    </>
  )}

export default Main;
