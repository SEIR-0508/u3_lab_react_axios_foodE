
import './App.css'
import Main from "./Components/Main"
import axios from "axios"
import { useState, useEffect } from 'react'
import { ALLDRINKS } from "./globals"
import Home from "./Components/Home"

function App() {
  
  const [searchQuery, setSearchQuery] = useState('');
 

  const limit=500;
  const offset=0;
  const SEEALL = `${ALLDRINKS}&limit=${limit}&offset=${offset}`
  

  const [drinkList, setDrinkList] = useState([])

  const getDrinkList = async() => {
    const response = await axios.get(`${ALLDRINKS}${searchQuery}`)
    console.log(response.data.drinks)
    setDrinkList(response.data.drinks)
    console.log(drinkList)
  }
 

  useEffect(() => {
    getDrinkList()
  }, [searchQuery])

  return (
    <div className='app'>
      <div>
        <Home />
      </div>
      <div>
        <Main drinks={drinkList} setSearchQuery={setSearchQuery}/>
      </div>
    </div>
  )
}

export default App
