import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <nav className="nav">
            <h3>Cocktail DB</h3>
            <div>
                <Link to="/"> Home </Link>
                <Link to="/cocktails"> Cocktails </Link>
                <Link to="/alcohols"> Alcohols </Link>
            </div>
        </nav>
    )
}

export default Nav