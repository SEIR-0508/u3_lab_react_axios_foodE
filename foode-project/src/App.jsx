import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Drink from './components/Drink'
import Home from './components/Home'
import DrinksList from './components/DrinksList'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Search from './components/Search'
import MealList from './components/MealList'


function App() {

  //Drinks Sections

  const [drinks, setDrinks] = useState()


  useEffect(() => {
       const getDrinks = async () => {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)

        // console.log(response)
        setDrinks(response.data.drinks)
       }
     
       getDrinks()

  }, [])

  
  const navigate = useNavigate()

  const showDrink = (drink) => {
      navigate(`/drinkslist/${drink.idDrink}`, {state: {drink: drink}})
  }


   
    const [searchResults, setSearchResults] = useState()
    const [mealsResults, setMealsResults] = useState()
     const [search, setSearch] = useState('')

    const getDrinkSearch = async () => {
     
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)

    
       

      setSearchResults(response.data.drinks)
    
      
    }



 
 
  //Meals Sections

  const getMealSearch = async () => {

    const rresponse = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)

    setMealsResults(rresponse.data.meals)
  }




  
    const [meals, setMeals] = useState()

    useEffect(() => {

      const getMeals = async  () => {
          
         const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)

         console.log(response)
         setMeals(response.data.meals)

        
      }

      getMeals()
        
    }, [])




    const handleSearch =  async (search) => {
      setSearch(search)
      if (!search)  {
        setSearchResults([])
        setMealsResults([])
        navigate('/')
      }else {
       await 
        getDrinkSearch()
        getMealSearch()
        navigate('/search')
      }
      
}




  

  return (
    <div>
       <header>
          <Nav handleSearch={handleSearch} 
                search={search}
                />
       </header>

       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/drinkslist" element={<DrinksList drinks={drinks} showDrink={showDrink}
                    handleSearch={handleSearch}/>}/>
           <Route path="/drinkslist/:idDrink" element={<Drink drinks={drinks} />}/>
           <Route path="/search" element={<Search 
                  search={search}
                  searchResults={searchResults}
                  mealsResults={mealsResults}
                  setSearchResults={setSearchResults}/>}/>
            <Route path="/meallists" element={<MealList meals={meals}/>}/>

       </Routes>



    </div>
  )
}

export default App
