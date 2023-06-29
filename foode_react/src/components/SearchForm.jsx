import React from 'react'
import { useState } from 'react'
import axios from 'axios'
export default function SearchForm(props) {

const [searchTerm, setSearchTerm] = useState('')

const handleSubmit = (e) => {
  e.preventdefault()
  getSearch()
}

const handleChange = (e) => {
  setSearchTerm({ ...searchTerm, ['']: e.target.value  })
  
  console.log(searchTerm.toLowerCase())
props.setCocktail(props.cocktail.filter(drink=>drink.strDrink.toLowerCase().includes(searchTerm.toLowerCase())===true))
};

const getSearch = async () => {
  const response = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
  );
setSearchTerm(response.data.drinks)
  console.log(response.data.drinks)
};


  return (
    <section className='section search'>
      <form className='search-form' >
        <div className='form-control'>
          <label htmlFor='name'>Search For Your Happiness</label>
          <input 
            type='text'
            name='name'
            id='name'
            onChange={handleChange}
          />
          <button onSubmit={handleSubmit}>Press Me, You Know You Wanna</button>
        </div>
      </form> 
     
   
      </section>
    
  )
  }