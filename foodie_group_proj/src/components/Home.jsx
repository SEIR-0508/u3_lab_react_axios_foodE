
const Home = (props) => {
  console.log(props)
   
    return (
      <div className="serch-results">
        {props.earchQuery.map((results) => {
          <div key={results.strMeal}
          className="queryResults-card">
            <h2>{results.strMeal}</h2>
            <p>{results.strCategory}</p>
            <p>{results.strArea}</p>
            <p>{results.strInstructions}</p>
          </div>
        }
      
        
        )}


      </div>

    )
    
}
  


  export default Home