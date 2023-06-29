import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../globals";
import Drinks from "./Drinks";
import DrinkDetails from "./DrinkDetails";

const SearchRecipe = () => {
  const [drink, setDrink] = useState("");
  const [drinkArray, setDrinkArray] = useState([]);
  const [isComponentVisible, setComponentVisible] = useState(true);

  const handleChange = (event) => {
    setDrink(event.target.value);
    //console.log(drink);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    //get recipe as user types a search query to auto populate
    const getRecipes = async () => {
      const response = await axios.get(`${BASE_URL}s=${drink}`);
      setDrinkArray(response.data.drinks);
    };
    getRecipes();
  }, [drink]);

  useEffect(() => {
    isComponentVisible
      ? document.body.classList.add("blur-body")
      : document.body.classList.remove("blur-body");

    return () => {
      document.body.classList.remove("blur-body");
    };
  }, [isComponentVisible]);

  return (
    <div className="search-recipe">
      <form onSubmit={handleSubmit} className="recipe-search-form">
        <label className="input-recipe-label">Search Drink:</label>
        <input
          className="input-recipe-input"
          id="drink"
          type="text"
          onChange={handleChange}
          value={drink}
          placeholder="Enter a cocktail here.."
        />
      </form>
      <div className="drinks-gallery">
        <Drinks drinks={drinkArray} drink={drink}></Drinks>
        <DrinkDetails></DrinkDetails>
      </div>
    </div>
  );
};

export default SearchRecipe;
