import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Cocktails = ({ cocktails }) => {
    let navigate = useNavigate()
    const showCocktail = (cocktail) => {
        navigate(`${cocktail.strDrink}`)
    }
    if (!cocktails) {
        return <div> No cocktails found. </div>
    } else {
        return (
            <div className='cocktails-grid'>
                <h3> Find a cocktail </h3>
                {cocktails.map((cocktail, index) => (
                    <div
                        key={index}
                        className='cocktail-card'
                        onClick={(() => showCocktail(cocktail))}
                        style={{
                            backgroundImage: `url(${cocktail.strDrinkThumb})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',

                        }}
                    >
                        <h4> {cocktail.strDrink} </h4>
                    </div>
                ))}
            </div>
        )
    }
}

export default Cocktails
