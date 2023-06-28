import Nav from "./Components/Nav"
import './App.css'
import Main from "./Components/Main"
import axios from "axios"
import { useState, useEffect } from 'react'
import { ALLDRINKS } from "./globals"

function App() {
  
  const [drinkList, setDrinkList] = useState([])

  const getDrinkList = async() => {
    const response = await axios.get(`${ALLDRINKS}`)
    console.log(response.data)
    setDrinkList(response.data.drinks)
    console.log(drinkList)
  }

  useEffect(() => {
    getDrinkList()
  }, [])

  return (
    <div className='app'>
      <div>
        <Nav />
      </div>
      <div>
        <Main/>
      </div>
    </div>
  )
}

export default App
