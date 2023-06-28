import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import logo from '../assets/logo.png'


export default function Header () {
    const [isActive, setIsActive] = useState(false)

    const logoClick = () => {
        if (isActive) {
            setIsActive(false)
        } else {
            setIsActive(true)
        }
    }
    const initialState = 'search'



    const [search, setSearchState] = useState(initialState)

    const handleSubmit = e => {
        if (e.key === "Enter") {
            e.preventDefault()
            console.log(e.target.value)
            setSearchState(initialState)
        }
        // e.preventDefault()
        // console.log(e.target.value)
        // setSearchState(initialState)
    }

    const handleChange = e => {
        setSearchState({...search, [e.target.id]: e.target.value})
    }


    return (
        <div >
        <div className="header">
            <Link to="/">Home</Link>
            <img src={logo} className="logo" onClick={logoClick}/>
            <input type="search" placeholder={initialState} className="search" onKeyPress={handleSubmit}  onChange={handleChange}/>
        </div>
        <div 
        style={{
            display: isActive ? "" : "none"
        }}
        >
            <Nav minimize={logoClick}/>
        </div>
        </div>

    )
}