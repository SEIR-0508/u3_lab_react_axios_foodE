import { useNavigate } from "react-router-dom"
import {useState} from 'react'
import Nav from './Nav'

const DrinkList = (props) => { 
    let navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState('')
    const [input, setInput] = useState('')
   
    const showDrink = (drink) => {
        navigate(`${drink.strDrink}`)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchQuery(input)
        setInput("")
    }
    
    console.log(props)
    if(!props.drinks) {
        return <div>drinks loading please wait</div>
    } else {
      
    const filteredDrinks = props.drinks.filter((drink) =>
    drink.strDrink.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
    
    <div className="grid">
  
       <div>
           <form onSubmit={handleSubmit}>
            <h1>Drinks List Here</h1>
            <input
            type="input"
            value={input}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search drinks by name"
          />
            <button type="submit">search</button>

          </form>
       </div>

       <div className="drinks-grid">
          {filteredDrinks.map((drink) => (
            <div
              onClick={() => showDrink(drink)}
              key={drink.strDrink}
              className="card"
            >
              
              <h3 className="drinks-grid-h3">{drink.strDrink}</h3>
              <p>{drink.strCategory}</p>
              
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default DrinkList