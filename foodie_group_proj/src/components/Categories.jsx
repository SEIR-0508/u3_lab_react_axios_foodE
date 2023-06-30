import axios from 'axios'
import { useState, useEffect } from 'react'

const Categories = () => {

  const [ category, setCategories ] = useState([])

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      console.log(response)
      setCategories(response.data.results)

    }

    getCategory()
   }, [])

    return (
      <div calassName= "category">
        <h1>Categories</h1>
          {category.map((categories)=> {
        <div key={categories.strCategory}
        className='catagory-card'>
          <h2>{categories.strCategory}</h2>
          <p>{categories.strCategoryDescription}</p>
          <img src = {catagories.strCategoryThumb} alt = {categories.strCategory} />

        </div>


          })}
      
      </div>

    )
    
  }
  
  export default Categories