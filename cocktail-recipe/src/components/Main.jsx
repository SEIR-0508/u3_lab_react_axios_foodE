import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import RecipeGenerator from "./RecipeGenerator";
import SearchRecipe from "./SearchRecipe";
import DrinkDetails from "./DrinkDetails";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/generate" element={<RecipeGenerator />} />
      <Route path="/recipes" element={<SearchRecipe />} />
      <Route path="/recipes/:id" element={<DrinkDetails />} />
    </Routes>
  );
};

export default Main;
