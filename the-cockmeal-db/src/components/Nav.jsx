import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex space-x-4 text-xl my-3 ml-3 justify-center">
      <Link
        to="/"
        className="rounded-lg px-5 py-2 text-slate-700 bg-yellow-200 hover:bg-yellow-300 active:bg-yellow-300"
      >
        Home
      </Link>
      <Link
        to="/cocktails"
        className="rounded-lg px-5 py-2 text-slate-700 bg-red-200 hover:bg-red-300"
      >
        Cocktails
      </Link>
      <Link
        to="/meals"
        className="rounded-lg px-7 py-2 text-slate-700 bg-orange-200 hover:bg-orange-300"
      >
        Meals
      </Link>
      <Link
        to="/favorites"
        className="rounded-lg px-7 py-2 text-slate-700 bg-green-200 hover:bg-orange-300"
      >
        Favorites
      </Link>
    </nav>
  );
};

export default Nav;
