import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function Nav () {
    const [glass, setGlass] = useState([])
    const [spirit, setSpirit] = useState([])
    const [category, setCategory] = useState([])

    useEffect(() => {
        const getGlass = async () => {
            const responce = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`)
            setGlass(responce)
        }
        const getSpirit = async () => {
            const responce = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
            setSpirit(responce)
        }
        const getCategory = async () => {
            const responce = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
            setCategory(responce)
        }
        getGlass()
        getSpirit()
        getCategory()
    }, [])

    let navigate = useNavigate()
    const showLink = (name) => {
        navigate(`${name}`)
    }

    if (!glass.data || !spirit.data || !category.data) {
        return ( 
            <h1>Loading...</h1>
        )
    } else {
        return (
            <div className="Nav">
            <div>
                <h3>Filter By Glass:</h3>
                <div className="list">
                    {glass.data.drinks.map((myGlass, index) => [
                        <p key={index} onClick={() => showLink(myGlass.strGlass)}>{myGlass.strGlass}</p>
                    ])}
                </div>
            </div>
            <div>
                <h3>Filter By Spirit:</h3>
                <div className="list">
                    {spirit.data.drinks.map((mySpirit, index) => [
                        <p key={index} onClick={() => showLink(mySpirit.strIngredient1)}>{mySpirit.strIngredient1}</p>
                    ])}
                </div>
            </div>
            <div>
                <h3>Filter By Category:</h3>
                <div className="list">
                    {category.data.drinks.map((myCategory, index) => [
                        <p key={index} onClick={() => showLink(myCategory.strCategory)}>{myCategory.strCategory}</p>
                    ])}
                </div>
            </div>
        </div>
        )
    }
}