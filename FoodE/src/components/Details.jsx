import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const DetailsPage = (props) => {
    const [cocktail, setCocktail] = useState('')
    let { id } = useParams()

    useEffect(()=> {
        const getCocktail = async () => {
            let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            setCocktail(response.data.drinks)
        }
    }, [cocktail, id])

    if (cocktail.length === 0) {
        return <h2>Loading...</h2>
    } else {
        return (
            <div className="individualCard">
                <h2 className="individualTitle">{cocktail.strDrink} </h2>
                <div class="individualDisplay">
                    <div className="titleInfo">
                        <img src={cocktail.strImageSource}/>
                    </div>
                <div className="additionalInfo">
                    <p><strong>Tags:</strong> {cocktail.strTags}</p>
                    <p><strong>Category:</strong> {cocktail.strCategory}</p>
                    <p><strong>Alcoholic or Non-Alcoholic:</strong> {cocktail.strAlcoholic}</p>
                    <p><strong>Glass:</strong> {cocktail.strGlass}</p>
                    <p><strong>Instructions:</strong> {cocktail.strInstructions}</p>
                    <p><strong>Ingredient1:</strong> {cocktail.strIngredient1}</p>
                    <p><strong>Ingredient2:</strong> {cocktail.strIngredient2}</p>
                    <p><strong>Ingredient3:</strong> {cocktail.strIngredient3}</p>
                    <p><strong>Ingredient4:</strong> {cocktail.strIngredient4}</p>
                    <Link class="goBack" to="/">Go home</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailsPage