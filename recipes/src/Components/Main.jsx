import { Route, Routes } from "react-router-dom";
import Home from './Home'
import DrinkDetails from "./DrinkDetails";






const Main = (props) => {
  
  return (
    <Routes>

      <Route
        path="/"
        element={<Home 
          drinkName={props}
        />}
      />
      <Route
        path="/:id"
        element={<DrinkDetails 
          drinkName={props}
        />}
      />
      


    </Routes>
  )
}

export default Main