import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'


const DetailsPage = (props) => {
    const [cocktail, setCocktail] = useState('')
    let { id } = useParams()
    let isNum = false
    const containsNumbers = (id) => {
        if (/\d/.test(id)) {
            isNum = true
        }
    }
    containsNumbers(id)
    console.log(`${isNum} number or string`)

    useEffect(()=> {
        const getCocktail = async () => {
            let response = ""
            if (isNum) {
                response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            } else {
                response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`)
            }
            
            console.log(response.data.drinks)
            setCocktail(response.data.drinks)
        }
        getCocktail()
    }, [])

    console.log(cocktail)


    if (cocktail.length === 0) {
        return <h2>Loading...</h2>
    } else {
        return (
            <div className="individualCard">
                <h2 className="individualTitle">{cocktail[0].strDrink} </h2>
                <div className="individualDisplay">
                    <div className="titleInfo">
                        <img class="cocktailImage" src={cocktail[0].strDrinkThumb}/>
                    </div>
                <div className="additionalInfo">
                    <p><strong>Tags:</strong> {cocktail[0].strTags}</p>
                    <p><strong>Category:</strong> {cocktail[0].strCategory}</p>
                    <p><strong>Alcoholic or Non-Alcoholic:</strong> {cocktail[0].strAlcoholic}</p>
                    <p><strong>Glass:</strong> {cocktail[0].strGlass}</p>
                    <p><strong>Instructions:</strong> {cocktail[0].strInstructions}</p>
                    <p><strong>Ingredient1:</strong> {cocktail[0].strIngredient1}</p>
                    <p><strong>Ingredient2:</strong> {cocktail[0].strIngredient2}</p>
                    <p><strong>Ingredient3:</strong> {cocktail[0].strIngredient3}</p>
                    <p><strong>Ingredient4:</strong> {cocktail[0].strIngredient4}</p>
                    <Link className="goBack" to="/">Go home</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailsPage