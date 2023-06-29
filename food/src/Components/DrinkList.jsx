import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ALLDRINKS } from "../globals";
import axios from "axios";

const DrinkList = (props) => {
  let navigate = useNavigate();
  const [input, setInput] = useState("");

  const showDrink = (drink) => {
    navigate(`${drink.strDrink}`);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSearchQuery(input);
    setInput("");
  };

  console.log(props);
  if (!props.drinks) {
    return <div>drinks loading please wait</div>;
  } else {
    return (
      <div className="grid">
        <div>
          <form onSubmit={handleSubmit}>
            
            <input
              type="input"
              value={input}
              onChange={handleChange}
              placeholder="Search drinks by name"
            />
            <button type="submit">search</button>
          </form>
        </div>

        <div className="drinks-grid">
          {props.drinks.map((drink) => (
            <div className="drinks-square">
            <div
              onClick={() => showDrink(drink)}
              key={drink.strDrink}
              className="card"
            >
              <h3 className="drinks-grid-h3">{drink.strDrink}</h3>
              <p>{drink.strCategory}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default DrinkList;
