import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <Link className="button-menu" to="./">
        <button>Home</button>
      </Link>
      <Link className="button-menu" to="./generate">
        <button>Recipe Generator</button>
      </Link>
      <Link className="button-menu" to="./recipes">
        <button>Recipes</button>
      </Link>
    </div>
  );
};

export default Nav;
