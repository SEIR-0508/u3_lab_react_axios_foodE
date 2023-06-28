import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import DrinkList from './DrinkList'

const Main = () => {
    

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Drinks" element={<DrinkList />}/>
        </Routes>
    )
}

export default Main