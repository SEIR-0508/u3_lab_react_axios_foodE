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
        <NavLink to="/Drinks" className="back-link-top">Back</NavLink>
        </div>
        <img 
            src={drink.strDrinkThumb} 
            style={{ width: '350px', height: 'auto' }}
            className='dd-img'
            />
        <h2 className='dd-h2'>{drink.strDrink}</h2>
        <div className='dd-left-align'>
        <p><strong>Served in a: </strong> {drink.strGlass}</p>
        <p><strong>How to make: </strong>{drink.strInstructions}</p>
        
        <ul className='ingredients'>
        <strong>Ingredients:</strong>
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
        <div>
        <NavLink to="/Drinks" className="back-link">Back</NavLink>
        </div>
       </div>
        
      ) : null;
}

export default DrinkDetail