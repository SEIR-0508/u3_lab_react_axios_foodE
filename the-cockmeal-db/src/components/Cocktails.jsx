import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cocktails = ({ cocktails, setCocktails }) => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");

    const getCocktails = async () => {
      let response =
        await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}
      `);
      setCocktails(response.data.drinks);
    };
    getCocktails();
  };

  const handleClick = (e) => {
    navigate(`/cocktails/${e.currentTarget.id}`);
  };
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="container flex flex-row space-x-2 justify-center">
        <p>Search For Cocktails:</p>
        <form onSubmit={handleSubmit}>
          <input
            placeholder=""
            type="input"
            value={input}
            className="border mr-4"
            onChange={handleChange}
          />
          <button type="submit" className="bg-slate-200 px-3 py-1">
            Submit
          </button>
        </form>
      </div>
      <div className="container flex flex-none flex-row flex-wrap justify-center items-center space-x-5 space-y-5 mt-5">
        {cocktails
          ? cocktails.map((cocktail) => (
              <div
                id={cocktail.idDrink}
                key={cocktail.idDrink}
                className="bg-red-100 text-center px-4 hover:bg-red-400 max-w-xs text-pink-500 hover:text-white"
                onClick={handleClick}
              >
                <h3 className="text-2xl p-3 font-bold ">{cocktail.strDrink}</h3>
                <img
                  className="w-60 mb-5 mx-auto"
                  src={cocktail.strDrinkThumb}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Cocktails;
