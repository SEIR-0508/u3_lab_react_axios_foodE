import "./App.css"
import Main from "./Components/Main"
import Nav from "./Components/Nav"
import { useState } from "react"
import axios from "axios"
import SearchBar from "./Components/SearchBar"

function App() {
  const [drinkName, setDrinkName] = useState([])

  const getDrinksByName = async (inputValue) => {
    if (inputValue) {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
        )
        setDrinkName(response.data.drinks)
      } catch (error) {
        console.log("Error fetching drinks:", error)
      }
    }
  }

  return (
    <div>
      <Nav />
      <SearchBar getDrinksByName={getDrinksByName} />
      <Main drinkName={drinkName}/>
    </div>
  )
}

export default App



