import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../globals";

const RecipeGenerator = () => {
  //   const [ingredients, setIngredients] = useState([]);
  //   const [recipes, setRecipes] = useState([]);

  //   useEffect(() => {
  //     const getIngredients = async () => {
  //       const response = await axios.get(`${BASE_URL}`);

  //       setStarships(response.data.results);
  //       console.log(response);
  //     };
  //     getStarships();
  //   }, []);

  return (
    <div className="generator-app">
      <div></div>
    </div>
  );
};

export default RecipeGenerator;
