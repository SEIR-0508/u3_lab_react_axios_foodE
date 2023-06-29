import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const DrinkDetail = ({drinks, setSearchQuery}) => {

    const [drink, setDrink ] = useState('')
    let { strDrink } = useParams()
    console.log(parseInt(strDrink))
    useEffect(() => {
        let selectedDrink = drinks.find(
            (drink) => drink.strDrink === strDrink
        )
        console.log(selectedDrink)
        setDrink(selectedDrink)
    }, [drinks, strDrink])

    return drink ? (
       <div>
        <img src={drink.strDrinkThumb}/>
        <h3>{drink.strDrink}</h3>
        <p>{drink.strGlass}</p>
        <p>{drink.strInstructions}</p>
        <p>Ingredients:</p>
        <ul>
            {Object.entries(drink)
            .filter(([key, value]) => key.startsWith('strIngredient') && value !== null)
            .map(([key, value]) => (
                <li key={key}>{value}</li>
            ))}
        </ul>
       </div>
        
      ) : null;
}

export default DrinkDetail