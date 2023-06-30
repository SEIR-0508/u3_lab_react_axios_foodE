import Home from './Home'
import Categories from './categories'
import { Route, Routes } from 'react-router-dom'

const Main = (props) => {
   
    return (

    <div> 
        <h2> I am main </h2>
        <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/categories' element={<Categories category={props.category}/>}/>

        </Routes> 

    </div>
    

    )
    
  }
  
  export default Main