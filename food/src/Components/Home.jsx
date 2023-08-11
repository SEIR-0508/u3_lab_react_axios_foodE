import Nav from "./Nav"
import { NavLink } from "react-router-dom"

const Home = () => (
  <div>
    <div>
      <h3 className="home-h3">Welcome to SipStitch: Your Ultimate Cocktail Companion!
        <br />
        Explore a world of delightful cocktails at your fingertips.
        With SipStitch, you can easily search for a vast array of cocktails, discover their ingredients and preparation instructions.
        <br />
        Unleash your inner mixologist and create extraordinary experiences with SipStitch today!</h3>
    </div>
    <div>
      <NavLink to="/Drinks" className="discover">Discover Your Next Libation >></NavLink>
    </div>
  </div>
)

export default Home