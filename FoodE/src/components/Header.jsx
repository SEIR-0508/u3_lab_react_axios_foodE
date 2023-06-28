import Nav from './Nav'
import logo from '../assets/logo.png'

export default function Header () {
    return (
        <div>
        <div className="header">
            <img src={logo} className="logo"/>
            <input type="search" className="search"/>
        </div>
        <div>
            <Nav />
        </div>
        </div>

    )
}