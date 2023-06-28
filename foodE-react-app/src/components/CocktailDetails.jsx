import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CocktailDetails = ({cocktails}) => {

    const [cocktail, setCocktail] = useState(null)
    let { id } = useParams()

    useEffect(() => {
        let selectedCocktail = cocktails.find(
            (cocktail) => cocktail.idDrink === parseInt(id)
        )
        if (selectedCocktail) {
            setCocktail(selectedCocktail)
        }
    }, [cocktails, id])

    if (cocktail) {
        return (
            <div className="cocktail-details">
            <h2> {cocktail.strDrink} </h2>
            <p> Here are some details </p>
        </div>
    )
} else {       
        return <p> Looking for mixers </p>
}
}

export default CocktailDetails