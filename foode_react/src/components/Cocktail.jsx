import { useState, useEffect } from 'react'
import SearchForm from '../components/SearchForm'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Cocktail () {

  const showDrink = (drink) => {
    
  }

const [cocktail, setCocktail ] = useState(null)

useEffect(()=> {
const getData = async () =>{
const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')

console.log(response.data.drinks)
setCocktail(response.data.drinks)

}

getData()

}, [])

if (!cocktail) {
    return <h2> Loading, take a look at our drink menu</h2>
} else {
  
return (  
   
  <div className='cocktail'>
    <SearchForm setCocktail={setCocktail} cocktail={cocktail}/>
  <div className='img-container'>
  <div className='cocktail-footer'>
  </div>
  <div className='cocktails-center'>
    {
      cocktail.map((cocktail)=>(
        <div onClick={() => showDrink(cocktail)} key={cocktail.strDrink} className='card'>
          <img className='preview' src={`${cocktail.strDrinkThumb}/preview`} />
          <h2>{cocktail.strDrink}</h2>
          <h3>{cocktail.strGlass}</h3>
          <h4>{cocktail.strAlcoholic}</h4>
          <Link to={`/cocktail/${cocktail.idDrink}`} className='btn btn-primary btn-details'>
          details
        </Link>
          </div>       
          
      ))}
      <div className="backHome">
      <Link to='/cocktail' className='btn btn-primary'>
          back home
        </Link>
          </div>
  </div>
  </div>  
</div>
 
)
}}
