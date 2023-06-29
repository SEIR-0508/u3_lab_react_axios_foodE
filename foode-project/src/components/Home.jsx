import { Link }  from 'react-router-dom'

export default function Home() {
    return(
        <div className="home">
            <video className="hero-video" src="/video/hero.mp4"/>
            <div className="hero-content">
            <h1>Welcome to Our Website</h1>
            <p>Explore and discover amazing content.</p>
             <Link to='/drinkslist'><button>Get Started</button></Link>
      </div>
        </div>
    )
} 