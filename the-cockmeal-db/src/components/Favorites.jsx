const Favorites = ({
  favoriteCocktails,
  setFavoriteCocktails,
  favoriteMeals,
  setFavoriteMeals,
}) => {
  const removeFavoriteCocktail = (e) => {
    const newArray = favoriteCocktails.filter(
      (item) => item.idDrink !== e.target.id
    );
    setFavoriteCocktails(newArray);
  };
  const removeFavoriteMeal = (e) => {
    const newArray = favoriteMeals.filter(
      (item) => item.idMeal !== e.target.id
    );
    setFavoriteMeals(newArray);
  };
  return (
    <div className="grid grid-cols-2 mx-auto max-w-4xl text-center pt-5">
      <div className=" space-y-5">
        <h1 className="text-3xl font-semibold text-red-400 mb-5">
          Favorite Cocktails
        </h1>
        {favoriteCocktails.map((cocktail) => (
          <div
            id={cocktail.idDrink}
            key={cocktail.idDrink}
            className="bg-red-100 text-center px-4 max-w-xs text-pink-500 mx-auto pb-5"
          >
            <h3 className="text-2xl p-3 font-bold ">{cocktail.strDrink}</h3>
            <img className="w-60 mb-5 mx-auto" src={cocktail.strDrinkThumb} />
            <button
              className="bg-red-500 px-4 py-2 font-bold text-white rounded-lg"
              id={cocktail.idDrink}
              onClick={removeFavoriteCocktail}
            >
              Remove From Favorites
            </button>
          </div>
        ))}
      </div>
      <div className="space-y-5">
        <h1 className="text-3xl font-semibold text-orange-400 mb-5">
          Favorite Meals
        </h1>
        {favoriteMeals.map((meal) => (
          <div
            id={meal.idMeal}
            key={meal.idMeal}
            className="bg-red-100 text-center px-4 max-w-xs text-pink-500 mx-auto pb-5"
          >
            <h3 className="text-2xl p-3 font-bold ">{meal.strMeal}</h3>
            <img className="w-60 mb-5 mx-auto" src={meal.strMealThumb} />
            <button
              className="bg-red-500 px-4 py-2 font-bold text-white rounded-lg"
              id={meal.idMeal}
              onClick={removeFavoriteMeal}
            >
              Remove From Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
