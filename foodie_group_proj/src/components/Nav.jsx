import { Link, useNavigate} from 'react-router-dom'
import React, { useState } from 'react'


function Nav(props) {

    const [searchQuery, setSearchQuery] = useState('')

    

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSearch(searchQuery);
      }
    
      const handleChange = (e) => {
        setSearchQuery(e.target.value);
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