export default function MealList (props) {


    return(
        <div className="mainCard">
             {props.meals.map((meal) => (
                <div className="card" 
                     key={meal.idMeal}
                     style={{backgroundImage: `url(${meal.strMealThumb})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'}}>
                    <h3>{meal.strMeal}</h3> 
                </div>
             ))}
        </div>
    )
}