import { Link } from 'react-router-dom'

export default function CocktailList ({cocktail}) {

if (!cocktail) {
    return <h2> Loading, take a look at our drink menu</h2>
} else {
  
return (  
   

    
 
  <div className='cocktails-center'>
    {
      cocktail.map((cocktail)=>(
        <div onClick={() => showDrink(cocktail)} key={cocktail.strDrink} className='card'>
          <img className='preview' src={`${cocktail.strDrinkThumb}/preview`} />
          <h2>{cocktail.strDrink}</h2>
          <h3>{cocktail.strGlass}</h3>
          <h4>{cocktail.strAlcoholic}</h4>
          <Link to={`/cocktail/${cocktail.idDrink}`} className='btn btn-primary btn-details'>
          details
        </Link>
          </div>       
          
      ))}
      <div className="backHome">
      <Link to='/cocktail' className='btn btn-primary'>
          back home
        </Link>
          </div>
  </div>
  
 
)
}}
