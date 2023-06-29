import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { searchById } from '../global'
import axios from 'axios'

const DrinkDetails = () => {
    const { id } = useParams()
    const [drink, setDrink] = useState(null)

    useEffect(() => {
        axios.get(searchById + id)
            .then(res => {
                console.log(res.data.drinks[0])
                setDrink(res.data.drinks[0])
            })
    }, [id])

    if (!drink) {
        return <h2>Loading...</h2>
    }

    const ingredients = []
    const measurements = []
    for (let i = 1; i < 16; i++) {
        if (drink[`strIngredient${i}`] != null) {
            ingredients.push(drink[`strIngredient${i}`])
            measurements.push(drink[`strMeasure${i}`])
        }
    }

    const {
        strDrink,
        strDrinkThumb,
        strInstructions,
        strCategory,
        strAlcoholic,
        strGlass,
    } = drink

    return (
        <div className='details'>
            <button className='back-button'>
                <Link to='/drinks' className='text-primary'><i class="bi bi-chevron-left"></i> Back to Drinks</Link>
            </button>

            <div className='container card'>
                <div className='row row-cols-1 row-cols-sm-2'>
                    <div className='col'>
                        <img src={strDrinkThumb} alt={strDrink} />
                    </div>
                    <div className='col'>
                        <h2>{strDrink}</h2>
                        <p>{strInstructions}</p>
                        <h5>Ingredients:</h5>
                        <ul>
                            {ingredients.map((ingredient, key) => (
                                <li key={key}>{ingredient}</li>
                            )
                            )}
                        </ul>

                        <ul>
                            {measurements.map((measurement, key) => (
                                <li key={key}>{measurement}</li>
                            )
                            )}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DrinkDetails