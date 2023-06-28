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
        getCocktails(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${id}`)
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