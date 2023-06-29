
import { BASE_URL } from "../globals"
import DetailsPage from './Details'
import { Route, Routes } from 'react-router-dom'
import Cocktails from './Cocktails'
import Home from './Home'

export default function Main () {
    return (
        <div className="routes-container">
            <Routes>
                <Route path="/cocktails/:id" element={<DetailsPage />} />
                <Route path="/cocktails/search/:id" element={<Cocktails />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

