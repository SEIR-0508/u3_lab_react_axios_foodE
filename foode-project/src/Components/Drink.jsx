import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'

const Drink = (props) => {

    const [drink, setDrink] = useState()
    let {id} = useParams()

    useEffect(() => {
        const getDrink = async() => {
            const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
            setDrink(response.data.drinks[id])
        }
        getDrink()
        }, [])

    return drink ? (
        <div className="drink-detail-page">
            <h1 className="drink-name">{drink.strDrink}</h1>
        </div>
    ) : <h1 className='loading'>Finding data...</h1>
}
export default Drink