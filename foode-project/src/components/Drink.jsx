import { useEffect, useState } from "react"
import { useParams, Link, useLocation  } from "react-router-dom"
import DrinksList from "./DrinksList"

export default function Drink(props) {
 
    // console.log(props)

    //  const [drink, setDrink] = useState()

     let { idDrink } = useParams()
     let location = useLocation()
     idDrink = parseInt(idDrink)
     let drinksss = location.state.drink
     console.log(drinksss)

    //  useEffect(() => {
    //     let selectedDrink = props.drinks.find(
    //         (drink) => drink.idDrink === idDrink);
    //     setDrink(selectedDrink)

    //     console.log(selectedDrink)

    //  }, [props.drinks, idDrink])

    return(
        <div className="detailsPage">
            <div>
                <img  src={drinksss.strDrinkThumb}/> 
            </div>
            <div className="detailContent">
                <h3>{drinksss.strDrink}</h3>
                <p>Ingredinet</p>
                   <p>{drinksss.strIngredient1}</p>
                   <p>{drinksss.strIngredient2}</p>
                   <p>{drinksss.strIngredient3}</p>
                   <p>{drinksss.strIngredient4}</p>
                <p>{drinksss.strInstructions}</p>  
                <p>{drinksss.strAlcoholic}</p>
                <p>{drinksss.strCategory}</p>
                <p>{drinksss.strGlass}</p>
            <Link to='/drinkslist'><button>back</button></Link>
            </div>
           
        </div>
    )
}