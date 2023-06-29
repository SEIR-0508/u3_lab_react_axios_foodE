import { useEffect, useState } from "react"
import { useParams, Link, useLocation  } from "react-router-dom"

export default function Search({ searchResults, mealsResults }) {

   

    return(
        <div className="mainSearch">

         {searchResults && searchResults.length > 0 && (
                <>
           
            {searchResults.map((drinksss)=> (
                <div className="search" key={drinksss.idDrink}>
                    <h3>{drinksss.strDrink}</h3>
                     <img src={drinksss.strDrinkThumb}/> 
                     <p>Ingredinet</p>
                        <p>{drinksss.strIngredient1}</p>
                        <p>{drinksss.strIngredient2}</p>
                        <p>{drinksss.strIngredient3}</p>
                        <p>{drinksss.strIngredient4}</p>
                     <p>{drinksss.strInstructions}</p>  
                     <p>{drinksss.strAlcoholic}</p>
                     <p>{drinksss.strCategory}</p>
                     <p>{drinksss.strGlass}</p>
                </div>
                
            ))}
                </>
            )}
            
            {mealsResults && mealsResults.length > 0 && (
                <>
            
              {mealsResults.map((meal)=> (
                 <div className="search"
                     key={meal.idMeal}>
                    <h3>{meal.strMeal}</h3>
                    <img src={meal.strMealThumb}/>
                 </div>
              ))}
           
              </>
            )}
            
            <Link to='/drinkslist'><button>back</button></Link>

        </div>
    )
}