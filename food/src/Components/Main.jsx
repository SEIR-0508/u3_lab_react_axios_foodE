import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import DrinkList from "./DrinkList";
import DrinkDetail from "./DrinkDetail";

const Main = ({ drinks, setDrinkList, setSearchQuery }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/Drinks"
        element={
          <DrinkList
            drinks={drinks}
            setDrinkList={setDrinkList}
            setSearchQuery={setSearchQuery}
          />
        }
      />
      <Route
        path="/Drinks/:strDrink"
        element={
          <DrinkDetail drinks={drinks} setSearchQuery={setSearchQuery} />
        }
      />
    </Routes>
  );
};

export default Main;
