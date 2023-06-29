import React from "react";
import { useNavigate } from "react-router-dom";

const Drinks = ({ drinks, drink }) => {
  let navigate = useNavigate();

  const showDrinkDetails = (id) => {
    navigate(`${id}`);
  };

  return drink.length >= 1 ? (
    drinks ? (
      <div className="grid-drinks">
        {drinks.map((drink) => (
          <div
            className="card"
            onClick={() => showDrinkDetails(drink.idDrink)}
            key={drink.idDrink}
          >
            <img src={drink.strDrinkThumb} alt="" />
            <h3>{drink.strDrink}</h3>
          </div>
        ))}
      </div>
    ) : (
      <div>No matches found</div>
    )
  ) : (
    <div></div>
  );
};

export default Drinks;
