import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import Cocktail from './Cocktail'
import SingleCocktail from './SingleCocktail.jsx'



export default function Main () {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cocktail" element={<Cocktail/>}/>
                <Route path='/cocktail/:id' element={ <SingleCocktail/>} />
            </Routes>
        </div>

    )
}





