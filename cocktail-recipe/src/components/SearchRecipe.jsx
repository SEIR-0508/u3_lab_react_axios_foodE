import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../globals";
import Drinks from "./Drinks";
import DrinkDetails from "./DrinkDetails";
import { TextField, FormControl, Container } from "@mui/material";

const SearchRecipe = () => {
  const [drink, setDrink] = useState("");
  const [drinkArray, setDrinkArray] = useState([]);
  const [isComponentVisible, setComponentVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [drinkId, setDrinkId] = useState(0);

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

  const handleMouseEnter = (key) => {
    setIsHovered(true);
    setDrinkId(key);
    console.log("enter");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log("leave");
  };

  return (
    <Container align="center" className="search-recipe" maxWidth="md">
      <FormControl onSubmit={handleSubmit} id="recipe-search-form" fullWidth>
        <TextField
          onChange={handleChange}
          value={drink}
          id="search-recipe"
          variant="outlined"
          label="Search a drink"
          color="primary"
          size="small"
          margin="normal"
          fullWidth
        />
      </FormControl>
      <Container className="drinks-gallery">
        <Drinks
          drinks={drinkArray}
          drink={drink}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        ></Drinks>
        {isHovered ? <DrinkDetails id={drinkId}></DrinkDetails> : null}
      </Container>
    </Container>
  );
};

export default SearchRecipe;
