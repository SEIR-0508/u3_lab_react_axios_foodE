
import { BASE_URL } from "../globals"
import DetailsPage from './Details'
import { Route, Routes } from 'react-router-dom'
import Cocktails from './Cocktails'

export default function Main () {
    return (
        <div className="routes-container">
            <Routes>
                <Route path="/cocktails/:id" element={<DetailsPage />} />
                <Route path="/cocktails/search/:id" element={<Cocktails />} />
            </Routes>
        </div>
    )
}

