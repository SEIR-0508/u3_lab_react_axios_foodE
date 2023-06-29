import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

function App() {

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
