import { Link, useNavigate} from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'

function Nav() {

    const [searchQuery, setSearchQuery] = useState('')

    const navigate = useNavigate()

        const handleSubmit = async (e) => {
        
            e.preventDefault()

            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
                console.log(response.data)
                navigate(`/'search=${searchQuery}`)
                } 
                    catch (error) {
                    console.error(error);
                 } 
               
            }
            
                const handleChange = (e) => {
                setSearchQuery(e.target.value)
                }

    
        return (

        <div>

                <div className='search-bar'>
                    <h1> Serch for recipes</h1>
                    <form onSubmit={ handleSubmit }>
                        <input type="text" value={searchQuery} onChange={handleChange} name={'name'} placeholder={'e.g., Teriyaki Chicken Casserole'} />
                        <button type='submit'>Search</button>
                    </form> 
                    

                </div>

                
                <nav className="Link">

                    <Link to='/'>Home</Link>
                    <Link to='/Categories'>Catagories</Link>

                </nav>

        </div>
        )   
  }
  
  export default Nav