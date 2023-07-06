import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LOOKUP_URL } from "../globals";
import axios from "axios";

const DrinkDetails = (props) => {
  let { id } = useParams();
  !id ? (id = props.id) : "";
  const [drink, setDrink] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const getIngredients = () => {
    let startIndex = 1;
    let ingredientsList = [];
    if (drink) {
      while (startIndex <= 15 && drink[`strIngredient${startIndex}`] != null) {
        ingredientsList.push(
          `${
            drink[`strMeasure${startIndex}`] != null
              ? drink[`strMeasure${startIndex}`]
              : ""
          } ${drink[`strIngredient${startIndex}`]}`
        );

        startIndex += 1;
        console.log(startIndex);
      }
    }

    console.log(ingredientsList);
    console.log(drink);
    return ingredientsList;
  };

  const getDrinkRecipe = async () => {
    const response = await axios.get(`${LOOKUP_URL}i=${id}`);
    setDrink(response.data.drinks[0]);
    console.log(ingredients);
  };

  useEffect(() => {
    getDrinkRecipe();
    //setIngredients(getIngredients());
  }, []);

  useEffect(() => {
    setIngredients(getIngredients());
  }, [drink]);
  //grab ingredients from response and format in neat array

  return drink ? (
    <div className="drink-detail-card">
      <img src={drink?.strDrinkThumb} alt="" />
      <h3>Ingredients:</h3>
      {ingredients?.map((ingredient) => (
        <h4>{ingredient}</h4>
      ))}
      <h3>Instructions:</h3>
      <p>{drink?.strInstructions}</p>
    </div>
  ) : null;
};

export default DrinkDetails;
