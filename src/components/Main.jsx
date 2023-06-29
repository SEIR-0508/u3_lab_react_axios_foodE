import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Drinks from "./Drinks"
import Ingredients from "./Ingredients"
import DrinkDetails from "./DrinkDetails"

const Main = () => {
    return (
        <div className='App-body'>
            <Routes>
                <Route path="/" element={<Drinks />} />
                <Route path="/drinks" element={<Drinks />} />
                <Route path="/ingredients" element={<Ingredients />} />
                <Route path="/drinks/:id" element={<DrinkDetails />} />
            </Routes>
        </div>
    )
}

export default Main