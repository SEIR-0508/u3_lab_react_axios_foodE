const DrinkList = (props) => { 

    return (
    <div className="grid">
  
       <div>
            <h1>Drinks List Here</h1>
       </div>

       <div>
       {
                props.drinks.map((drink) => (
                    <div onClick={()=> showDrink(drink)}
                         key={drink.strDrink}
                         className='card'>
                            <img src={drink.strDrinkThumb}/>
                            <h3>{drink.strDrink}</h3>
                            
                    </div>
                ))
            }
       </div>
      
    </div>
    )
}


export default DrinkList