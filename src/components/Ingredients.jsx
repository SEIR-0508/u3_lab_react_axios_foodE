import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { searchByName} from '../global'
import { useNavigate } from 'react-router-dom'

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    axios.get(searchByName)
      .then(res => {
        console.log(res.data.drinks)
        setDrinks(res.data.drinks)
      })
      .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`${id}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(searchByName + formState.searchName)
    axios.get(searchByName + formState.searchName)
    .then(res => {
      if (res.data.drinks === null) {
        setDrinks([])
      } else {
        setDrinks(res.data.drinks)
      }
    })
    .catch(err => console.log(err))
  }

  const [formState, setFormState] = useState({searchName: ''})

  const handleChange = (e) => {
    console.log(e.target)
    setFormState({ ...formState, [e.target.id]: e.target.value })
    console.log(formState)
  }


  return (
    <div className='drinks'>
      <form onSubmit={handleSubmit}>
        <input type="text" id='searchName' placeholder='Search' onChange={handleChange} />
        <button type='submit'>Search</button>
      </form>

      <div className='container'>
        {
          drinks.length > 0 ? <div className='row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
          {drinks.map(drink => (
            <div key={drink.idDrink} onClick={() => { handleClick(drink.idDrink) }} className='col'>
              <div className='card'>
                <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                <div className='name'><h5>{drink.strDrink}</h5></div>
              </div>
            </div>
          ))}
        </div> : <h1>No drinks found</h1>
        }
        

      </div>
    </div>

  )
}

export default Ingredients