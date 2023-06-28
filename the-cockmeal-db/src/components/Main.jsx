import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cocktails from "./Cocktails";
import Cocktail from "./Cocktail";
import Meals from "./Meals";
import Meal from "./Meal";
import Favorites from "./Favorites";
import { useState } from "react";

const Main = () => {
  const [cocktails, setCocktails] = useState([]);
  const [meals, setMeals] = useState([]);
  const [favoriteCocktails, setFavoriteCocktails] = useState([]);
  const [favoriteMeals, setFavoriteMeals] = useState([]);
  return (
    <main className="mt-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cocktails"
          element={
            <Cocktails cocktails={cocktails} setCocktails={setCocktails} />
          }
        />
        <Route
          path="/cocktails/:id"
          element={
            <Cocktail
              cocktails={cocktails}
              favoriteCocktails={favoriteCocktails}
              setFavoriteCocktails={setFavoriteCocktails}
            />
          }
        />
        <Route
          path="/meals"
          element={<Meals meals={meals} setMeals={setMeals} />}
        />
        <Route
          path="/meals/:id"
          element={
            <Meal
              meals={meals}
              favoriteMeals={favoriteMeals}
              setFavoriteMeals={setFavoriteMeals}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favoriteCocktails={favoriteCocktails}
              setFavoriteCocktails={setFavoriteCocktails}
              favoriteMeals={favoriteMeals}
              setFavoriteMeals={setFavoriteMeals}
            />
          }
        />
      </Routes>
    </main>
  );
};

export default Main;
