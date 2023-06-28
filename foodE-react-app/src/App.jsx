import { useEffect, useState } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import Nav from './components/Nav'
import Home from './components/Home'
import Cocktails from './components/Cocktails'
import Alcohols from './components/Alcohols'
import { BASE_URL } from './Globals'

function App() {
  const [cocktails, setCocktails] = useState([])
  let { id } = useParams()
  useEffect(() => {
    const getCocktails = async () => {
      const response = await axios.get(`${BASE_URL}?s=margarita`)
      setCocktails(response.data.drinks)
    }
    getCocktails()
  }, [])

  return (
    <div className='App'>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktails" element={<Cocktails cocktails={cocktails} />} />
          <Route path='/alcohols' element={<Alcohols />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
