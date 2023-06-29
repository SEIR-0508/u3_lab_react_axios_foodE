import { Link } from 'react-router-dom'


export default function Nav({search, handleSearch}) {

   console.log(search)
    

    return(
        <div className='nav-links'>
            <div>
                <input placeholder='search'
                       value={search}
                       onChange={(e) => handleSearch(e.target.value)}></input>
                <button
                onClick={() => handleSearch(search)}>Search</button>
            </div>
          
                <li>{<Link to='/'>Home</Link>}</li>
                <li>{<Link to='/drinkslist'>Drinks </Link>}</li>
                <li>{<Link to='/meallists'>Meals</Link>}</li>
        </div>
    )
}

