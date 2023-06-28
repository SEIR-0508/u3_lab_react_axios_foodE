import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DrinkDetails = (props) => {
  console.log(props);
  const [drinkId, setDrinkId] = useState("");
  const [drink, setDrink] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    setDrinkId(id);

    const selectedDrink = props.drinkName.drinkName.find(
      (drink) => drink.idDrink === id
    );
    setDrink(selectedDrink);
  }, []);

  const BackToSearch = () => (
    <Link to="/" className="back-button">
      Back
    </Link>
  );

  const renderIngredients = () => {
    const ingredients = [];

    for (let i = 1; i <= 15; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;

      if (drink[ingredientKey]) {
        ingredients.push(
          <li key={ingredientKey}>
            {drink[ingredientKey]} - {drink[measureKey]}
          </li>
        );
      }
    }

    return ingredients;
  };

  return (
    <div>
      <div className="back">
        <BackToSearch />
      </div>
      <div>
        {drink ? (
          <div className="drink-details">
            <div>
              <h1>{drink.strDrink}</h1>
              <img
                className="thumbnail-details"
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
              />
            </div>
            <div className="ingredients">
              <h3>Ingredients</h3>
              <ul>{renderIngredients()}</ul>
            </div>
            <div className="instructions">
              <h3>Instructions</h3>
              <p>{drink.strInstructions}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default DrinkDetails;
