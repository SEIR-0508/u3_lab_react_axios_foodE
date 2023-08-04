import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


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
       <div className='drinkdetails'>
        <div>
        <NavLink to="/Drinks" className="back-link">Back</NavLink>
        </div>
        <img src={drink.strDrinkThumb}/>
        <h3>{drink.strDrink}</h3>
        <p>{drink.strGlass}</p>
        <p>{drink.strInstructions}</p>
        <p><strong>Ingredients:</strong></p>
        <ul className='ingredients'>
        {Object.entries(drink)
        .filter(([key, value]) => key.startsWith('strIngredient') && value !== null)
        .map(([key, ingredient]) => {
            const measureKey = `strMeasure${key.split('strIngredient')[1]}`;
            const measurement = drink[measureKey];
            return (
                <li key={key}>
                    {ingredient} {measurement && `(${measurement})`}
                </li>
            );
        })}
    </ul>
       </div>
        
      ) : null;
}

export default DrinkDetail