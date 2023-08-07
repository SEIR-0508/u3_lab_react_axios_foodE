import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="/Drinks">Drinks</Link>
            {/* <Link to="/Food">Food</Link> */}
        </div>
    )
}

export default Nav