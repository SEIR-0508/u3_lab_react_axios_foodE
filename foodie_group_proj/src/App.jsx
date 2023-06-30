import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'
import axios from 'axios'


function App() {

  const [searchQuery, setSearchQuery] = useState('')

  const getQuery = async () => {
      const response = await axios.get(`www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
      console.log(response)
      setSearchQuery(response.data.results)
  }


  getQuery()

  return (
    <div className="App">

      <div className='Header'>
        <Header />
      </div>

      <div className='Header'>
        <Main />
      </div>

      <div className='Header'>
        <Footer />
      </div>



    </div>

  )

}

export default App
