import React from 'react'
import { useState } from 'react'
import axios from 'axios'
export default function SearchForm(props) {

const initialState = {
  input:""
}
const [searchTerm, setSearchTerm] = useState(initialState)

const handleSubmit = (e) => {
  e.preventDefault()
  getSearch()
  
}

const handleChange = (e) => {
  
  setSearchTerm({ ...searchTerm, [e.target.id]: e.target.value  })
  
  console.log(searchTerm.input.toLowerCase())

};

const getSearch = async () => {
  const response = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm.input}`
  );
props.setCocktail(response.data.drinks)
  console.log(response.data.drinks)
};


  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Search For Your Happiness</label>
          <input 
            type='text'
            name='name'
            id='input'
            onChange={handleChange}
          />
          <button type="Submit">Press Me, You Know You Wanna</button>
        </div>
      </form> 
     
   
      </section>
    
  )
  }