import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import DrinkList from './DrinkList'

const Main = ({drinks}) => {

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Drinks" element={<DrinkList drinks={drinks}/>}/>
        </Routes>
    )
}

export default Main