import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import FoodSearch from './FoodSearch'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Categories from './Categories'
import CategoryDetails from './CategoryDetails'


export default function Main () {
    const [category, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            setCategories(response.data.categories)
        }

        getCategories()
    })
    return (
        <div className='routesCont'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/categories' element={<Categories categories={category}/>} />
                <Route path='/categories/:strCategory' element={<CategoryDetails categories={category}/>} />
                <Route path='/foodsearch' element={<FoodSearch />}/>
            </Routes>
        </div>
    )
}