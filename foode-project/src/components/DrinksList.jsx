

export default function DrinksList(props ) {
     console.log(props)
   const { showDrink } = props

    return(
        <div className="mainCard">

            {props.drinks.map((drink) => (
                <div className="card" 
                     key={drink.idDrink}
                     onClick={() => showDrink(drink)}
                     style={{backgroundImage: `url(${drink.strDrinkThumb})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'}}>
                      <h3>{drink.strDrink}</h3>  
                </div>
            ))}

        </div>
    )
}