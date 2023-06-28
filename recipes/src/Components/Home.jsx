import { useNavigate } from "react-router"

const Home = (props) => {

  let navigate = useNavigate()
    
  const showDrink = (drink) => {
    navigate(`${drink.idDrink}`)  
  }

  return (
    <div className="gallery">
      {
        props.drinkName.drinkName.map((drink) => (
          <div key={drink.idDrink} onClick={() => showDrink(drink)} className="card">
            <img className='thumbnail' src={drink.strDrinkThumb} />
            <h2>{drink.strDrink}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default Home