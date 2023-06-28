import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const Cocktails = () => {
    const [cocktails, setCocktails] = useState([])
    let { id } = useParams()

    useEffect(()=> {
        const getCocktails = async (url) => {
            let response = await axios.get(url)
            let drinks = response.data.drinks
            console.log(drinks)
            setCocktails(drinks)
        }
        if (id === "Gin" || id === "Rum" || id === "Whiskey" || id === "Scotch" || id === "Brandy" || id === "Vodka" || id === "Wine" || id === "Schnapps" || id === "Tequila" || id === "Champagne") {
            getCocktails(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${id}`)
        } else if (id === "Highball_glass" || id === "Cocktail_glass" || id === "Old-Fashioned_glass" || id === "Whiskey_glass" || id === "Collins_glass" || id === "Pousse_cafe_glass" || id === "Champagne_flute" || id === "Whiskey_sour_glass" || id === "Cordial_glass" || id === "Brandy_snifter" || id === "White_wine_glass" || id === "Nick_and_nora_glass" || id === "Hurricane_glass" || id === "Coffee_mug" || id === "Shot_glass" || id === "Jar" || id === "Irish_coffee_cup" || id === "Punch_bowl" || id === "Pitcher" || id === "Pint_glass" || id === "Copper_mug" || id === "Wine_glass" || id === "Beer_mug" || id === "Margarita/Coupette_glass" || id === "Beer_pilsner" || id === "Beer_glass" || id === "Parfait_glass" || id === "Mason_jar" || id === "Margarita_glass" || id === "Martini_glass" || id === "Balloon_glass" || id === "Coupe_glass") {
            getCocktails(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${id}`)
        } else {
            getCocktails(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${id}`)
        }
    }, [cocktails])

    console.log(cocktails)
    

    if (cocktails.length === 0) {
        return <h2>Loading...</h2>
    } else {
        return (
            <div className="cocktails">
                <h2>{cocktails.id} Cocktails</h2>
                <div className="cocktail">
                {
                    cocktails.map((cocktail, id) => (
                        <div key={id}  className="card">
                            <h3>{cocktail.strDrink}</h3>
                            <img src={cocktail.strDrinkThumb}/>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default Cocktails