import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const Cocktails = () => {
    const [cocktails, setCocktails] = useState([])
    let { id } = useParams()
    let myString = ""

    const stringRemover = (string) => {
        myString = string.split(' ').join('_')
    }
    stringRemover(id)

    const spirits = ["Light rum", "Applejack", "Gin", "Dark rum", "Sweet Vermouth", "Strawberry schnapps", "Scotch", "Apricot brandy", "Triple sec", "Southern Comfort", "Orange bitters", "Brandy", "Lemon Vodka", "Blended whiskey", "Dry Vermouth", "Amaretto", "Tea", "Champagne", "Coffee liqueur", "Bourbon", "Tequila", "Vodka", "Anejo rum", "Bitters", "Sugar", "Kahlua", "demerara Sugar", "Dubonnet Rouge", "Watermelon", "Lime juice", "Irish whiskey", "Apple brandy", "Carbonated water", "Cherry brandy", "Creme de Cacao", "Grenadine", "Port", "Coffee brandy", "Red wine", "Rum", "Grapefruit juice", "Ricard", "Sherry", "Cognac", "Sloe gin", "Apple Juice", "Pineapple juice", "Lemon juice", "Sugar syrup", "Milk", "Strawberries", "Chocolate syrup", "Yoghurt", "Mango", "Ginger", "Lime", "Cantaloupe", "Berries", "Grapes", "Kiwi", "Tomato Juice", "Cocoa powder", "Chocolate", "Heavy cream", "Galliano", "Peach Vodka", "Ouzo", "Coffee", "Spiced rum", "Water", "Espresso", "Angelica root", "Orange", "Cranberries", "Johnnie Walker", "Apple cider", "Everclear", "Cranberry juice", "Egg yolk", "Egg", "Grape juice", "Peach nectar", "Lemon", "Firewater", "Lemonade", "Lager", "Whiskey", "Absolut Citron", "Pisco", "Irish cream", "Ale", "Chocolate liqueur", "Midori melon liqueur", "Sambuca", "Cider", "Sprite", "7-Up", "Blackberry brandy", "Peppermint schnapps", "Creme de Cassis"]

    useEffect(()=> {
        const getCocktails = async (url) => {
            let response = await axios.get(url)
            let drinks = response.data.drinks
            setCocktails(drinks)
        }
        if (spirits.includes(myString)) {
            console.log(`hit`)
            getCocktails(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${myString}`)
        } else if (myString === "Highball_glass" || myString === "Cocktail_glass" || myString === "Old-Fashioned_glass" || myString === "Whiskey_glass" || myString === "Collins_glass" || myString === "Pousse_cafe_glass" || myString === "Champagne_flute" || myString === "Whiskey_sour_glass" || myString === "Cordial_glass" || myString === "Brandy_snifter" || myString === "White_wine_glass" || myString === "Nick_and_nora_glass" || myString === "Hurricane_glass" || myString === "Coffee_mug" || myString === "Shot_glass" || myString === "Jar" || myString === "Irish_coffee_cup" || myString === "Punch_bowl" || myString === "Pitcher" || myString === "Pint_glass" || myString === "Copper_mug" || myString === "Wine_glass" || myString === "Beer_mug" || myString === "Margarita/Coupette_glass" || myString === "Beer_pilsner" || myString === "Beer_glass" || myString === "Parfait_glass" || myString === "Mason_jar" || myString === "Margarita_glass" || myString === "Martini_glass" || myString === "Balloon_glass" || myString === "Coupe_glass") {
            getCocktails(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${myString}`)
        } else {
            getCocktails(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${myString}`)
        }
    }, [id])

    if (cocktails === undefined || cocktails.length === 0) {
        return <h2>Loading...</h2>
    } else {
        return (
            <div className="cocktails">
                <h3>Cocktails</h3>
                <div className="cocktail">
                {
                    cocktails.map((cocktail, id) => (
                        <div key={id}  className="card">
                            <h3>{cocktail.strDrink}</h3>
                            <img className="cocktailImages" src={cocktail.strDrinkThumb}/>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default Cocktails