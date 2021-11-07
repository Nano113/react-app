const Search = ({search,setSearch}) => {
    return (
        <form className='search' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search'>Search</label>
            <input 
             id='search'
             type='text'
             role='searchbox'
             placeholder='Seach'
             value={search}
             onChange={(e)=>setSearch(e.target.value)}
             />
        </form>
    )
}

export default Search
