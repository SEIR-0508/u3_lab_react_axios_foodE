import { Route, Routes} from 'react-router-dom'
import axios from 'axios'
import CocktailList from '../components/CocktailList'
import SingleCocktail from './SingleCocktail.jsx'
import { useState, useEffect } from 'react'
import SearchForm from './SearchForm'



export default function Main () {

    const [cocktail, setCocktail ] = useState(null)

useEffect(()=> {
const getData = async () =>{
const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')

console.log(response.data.drinks)
setCocktail(response.data.drinks)

}

getData()

}, [])
    return (
        <div>
            <SearchForm setCocktail={setCocktail} cocktail={cocktail}/>
            <Routes>
            <Route path="/" element={<CocktailList 
            cocktail={cocktail}/>}/>
                <Route path='/cocktail/:id' element={ <SingleCocktail/>} />
            </Routes>
        </div>

    )
}





