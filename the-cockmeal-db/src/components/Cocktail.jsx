import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Cocktail = ({ cocktails, favoriteCocktails, setFavoriteCocktails }) => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    let selectedCocktail = cocktails.find(
      (cocktail) => cocktail.idDrink == parseInt(id)
    );
    setCocktail(selectedCocktail);
    if (favoriteCocktails.includes(cocktail)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoriteCocktails]);

  const handleClick = () => {
    navigate("/cocktails");
  };

  const addFavorite = () => {
    setFavoriteCocktails([...favoriteCocktails, cocktail]);
  };

  const removeFavorite = () => {
    const newArray = favoriteCocktails.filter(
      (item) => item.idDrink !== cocktail.idDrink
    );
    setFavoriteCocktails(newArray);
  };

  if (!cocktail) return null;

  return (
    <div className="container text-center max-w-4xl mx-auto">
      <h1 className="text-5xl font-medium mb-4 pt-5">{cocktail.strDrink}</h1>
      <h3 className="text-3xl py-2">Category: {cocktail.strCategory}</h3>
      <h3 className="text-3xl py-2">Glass: {cocktail.strGlass}</h3>
      <h3 className="text-2xl py-2 mx-auto pb-4">
        Instructions: {cocktail.strInstructions}
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
      <img className="mx-auto w-80" src={cocktail.strDrinkThumb} />
      <button
        className="text-2xl font-medium rounded-lg bg-yellow-300 hover:bg-yellow-400 my-5 px-4 py-2"
        onClick={handleClick}
      >
        Go Back
      </button>
    </div>
  );
};

export default Cocktail;
