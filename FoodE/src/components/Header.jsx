import { useState } from 'react'
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

    console.log(isActive)


    return (
        <div>
        <div className="header">
            <img src={logo} className="logo" onClick={logoClick}/>
            <input type="search" className="search"/>
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