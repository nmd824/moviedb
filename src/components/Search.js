import React from 'react'

function Search({handleInput, searchEvent}){

  return (
    <section className = "searchbox-wrap">
    <input type ="text" 
    placeholder = "Search for any movie on The Movie Database" 
    className = "searchbox" 
    onChange = {handleInput} 
    onKeyPress = {searchEvent}/>
    </section>
  )
}

export default Search