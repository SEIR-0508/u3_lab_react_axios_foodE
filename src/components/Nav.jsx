import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav navbar-light bg-light">
            <div className="container">
                {/* <button>Nav Bar</button> */}
                <Link to="/">Home</Link>
                <Link to="/drinks">Drinks</Link>
            </div>

            
        </div>
    )
}

export default Nav;