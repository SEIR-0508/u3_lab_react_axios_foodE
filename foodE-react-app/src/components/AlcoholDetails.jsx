import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const AlcoholDetails = ({ alcohols }) => {
    const [alcohol, setAlcohol] = useState(null)
    let { id } = useParams()

    useEffect(() => {
        let selectedAlcohol = alcohols.find((alcohol) => alcohol.id === parseInt(id))
        setAlcohol(selectedAlcohol)
    }, [alcohols.strIngredient1, id])

    return (
        <div className="alcohols-grid">
            {alcohol ? (
                <>
                <h3> Alcohol details </h3>
                </>
            ) : (
                    <p> Looking for alcohol </p>
            )}
        </div>
    )
}

export default AlcoholDetails