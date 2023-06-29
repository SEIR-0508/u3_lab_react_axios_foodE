import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Alcohols = ({ alcohols }) => {
    let navigate = useNavigate()
    const showAlcohol = (alcohol) => {
        navigate(`${alcohol.strIngredient1}`)
    }
    if (!alcohols) {
        return <div> No alcohols found. </div>
    } else {
        return (
            <div className='alcohols-grid'>
                <h3> Pick your alcohol of choice </h3>
                {alcohols.map((alcohol, index) => (
                    <div
                        key={index}
                        className='alcohol-card'
                        onClick={() => showAlcohol(alcohol)}
                    >
                        <h4> {alcohol.strIngredient1} </h4>
                    </div>
                ))}
            </div>
        )
    }
}

export default Alcohols