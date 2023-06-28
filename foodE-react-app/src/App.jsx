import { useEffect, useState } from "react"
import { Routes, Route, useParams } from "react-router-dom"
import "./App.css"
import axios from "axios"
import Nav from "./components/Nav"
import Home from "./components/Home"
import Cocktails from "./components/Cocktails"
import CocktailDetails from "./components/CocktailDetails"
import Alcohols from "./components/Alcohols"
import AlcoholDetails from "./components/AlcoholDetails"
import { BASE_URL } from "./Globals"

function App() {
    const [cocktails, setCocktails] = useState([])
    useEffect(() => {
        const getCocktails = async () => {
            const response = await axios.get(`${BASE_URL}/search.php?s=margarita`) /* <<-- hardcoding margarita while building */
            setCocktails(response.data.drinks)
        }
        getCocktails()
    }, [])
  
  const [alcohols, setAlcohols] = useState([])
  useEffect(() => {
    const getAlcohols = async () => {
      const response = await axios.get(`${BASE_URL}/list.php?i=list`)
      setAlcohols(response.data.drinks)
    }
    getAlcohols()
  }, [])

    return (
        <div className='App'>
            <header>
                <Nav />
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route
                        path='/cocktails'
                        element={<Cocktails cocktails={cocktails} />}
                    />
                    <Route
                        path='/cocktails/:id'
                        element={<CocktailDetails cocktails={cocktails} />}
                    />
                    <Route
                        path='/alcohols'
                        element={<Alcohols alcohols={alcohols} />}
                    />
                    <Route
                        path='/alcohols/:id'
                        element={<AlcoholDetails alcohols={alcohols} />}
                    />
                </Routes>
            </main>
        </div>
    )
}

export default App
