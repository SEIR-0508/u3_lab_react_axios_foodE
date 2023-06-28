import React from 'react'
import Slider from './Slider';
import { useNavigate } from 'react-router-dom'

const Home = () => {

    
    return (
    <div className="home">

        <div className="cocktail-categories">

    <h1 className='welcome-message'>Boozy Coder</h1>
    <h3 className='welcome-message'>Where sloppy code is NOT a problem</h3>
        
        <Slider/>

        </div>


        <div className='featured-cocktails'>
    <h3 className='featured-message' id="fade">Featured</h3>
    <h2 className='featured-message'>Cocktails</h2>
                <div className='featured-cocktail-list'>




                </div>

        </div>

    </div>
)}

export default Home

