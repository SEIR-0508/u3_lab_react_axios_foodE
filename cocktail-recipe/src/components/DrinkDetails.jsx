import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LOOKUP_URL } from "../globals";
import axios from "axios";
import { Container, Typography } from "@mui/material";

const DrinkDetails = ({ id }) => {
  //let { id } = useParams();
  //!id ? (id = props.id) : "";
  //console.log(props);
  //let id = props.id;
  console.log(id);
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
    console.log(response);
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
    <Container className="drink-detail-card">
      {/* <img src={drink?.strDrinkThumb} alt="" /> */}
      <Typography variant="h6">Ingredients:</Typography>
      {ingredients?.map((ingredient) => (
        <Typography variant="body2">{ingredient}</Typography>
      ))}
      <Typography variant="h6">Instructions:</Typography>
      <Typography variant="p">{drink?.strInstructions}</Typography>
    </Container>
  ) : null;
};

export default DrinkDetails;
