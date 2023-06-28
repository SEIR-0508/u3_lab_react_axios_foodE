import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Meal = ({ meals, favoriteMeals, setFavoriteMeals }) => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    let selectedMeal = meals.find((meal) => meal.idMeal == parseInt(id));
    setMeal(selectedMeal);
    if (favoriteMeals.includes(meal)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoriteMeals]);

  const handleClick = () => {
    navigate("/meals");
  };

  const addFavorite = () => {
    setFavoriteMeals([...favoriteMeals, meal]);
  };

  const removeFavorite = () => {
    const newArray = favoriteMeals.filter(
      (item) => item.idMeal !== meal.idMeal
    );
    setFavoriteMeals(newArray);
  };

  if (!meal) return null;

  return (
    <div className="container text-center max-w-4xl mx-auto">
      <h1 className="text-5xl font-medium mb-4 pt-5">{meal.strMeal}</h1>
      <h3 className="text-3xl py-2">Category: {meal.strCategory}</h3>
      <h3 className="text-3xl py-2">Area: {meal.strArea}</h3>
      <h3 className="text-2xl py-2 mx-auto pb-4">
        Instructions: {meal.strInstructions}
      </h3>
      {isFavorite ? (
        <button
          className="text-2xl font-medium rounded-lg bg-red-300 hover:bg-red-400 my-5 px-4 py-2"
          onClick={removeFavorite}
        >
          Remove From Favorites
        </button>
      ) : (
        <button
          className="text-2xl font-medium rounded-lg bg-green-300 hover:bg-green-400 my-5 px-4 py-2"
          onClick={addFavorite}
        >
          Add To Favorites
        </button>
      )}
      <img className="mx-auto w-80" src={meal.strMealThumb} />
      <button
        className="text-2xl font-medium rounded-lg bg-yellow-300 hover:bg-yellow-400 my-5 px-4 py-2"
        onClick={handleClick}
      >
        Go Back
      </button>
    </div>
  );
};

export default Meal;
