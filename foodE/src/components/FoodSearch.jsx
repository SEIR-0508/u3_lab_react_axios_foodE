import { useState } from 'react'
import axios from 'axios'
export default function FoodSearch () {
const initialState = {
        meal: '',
        data: null
    }

    const [searchState, setSearchState] = useState(initialState)
      const getMeal = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchState.meal}`)          
            console.log(response)
            setSearchState({...searchState, data: response.data.meals[0] })
        }  
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(searchState)
        getMeal()
        setSearchState(initialState)
    }
    
    const handleChange = e => {
        setSearchState({...searchState, meal: e.target.value})
    }

    return(
        <div className='foodSearch'>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='meal' id='meal' onChange={handleChange} value={searchState.meal}/>
                <button type='submit'>find</button>
            </form>
        {searchState.data && (
        <div >
            <h2>{searchState.data.strMeal}</h2>
            <img src={searchState.data.strMealThumb} alt={searchState.data.strMeal} />
            <p>{searchState.data.strInstructions}</p>
            </div>
        )}
        </div>
        
    )  
}