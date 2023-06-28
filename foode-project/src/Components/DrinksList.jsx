import Nav from './Nav'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const DrinksList = (props) => {

    let navigate = useNavigate()

    const showDrink = (key) => {
        navigate(`${key}`)
    }

    return(
        <div className="drinks-page">
            <Nav />
            <h1 className='drink-list-title'>Drink List</h1>
            <div className="grid-container">
                {
                    props.drinks.map((drink, key) => (
                        <div key={key} className="card" onClick={() => showDrink(key)}>
                            <h2 className="card-title">{drink.strDrink}</h2>
                            <img src={drink.strDrinkThumb} alt='' className='card-image'/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DrinksList