import { useNavigate } from 'react-router-dom'
export default function Categories (props) {
let navigate = useNavigate ()

const showCategories = (category) => {
    navigate(`${category.strCategory}`)
}

return(
    <div className='grid'>
        {props.categories.map((category) => (
            <div key={category.id} onClick= {() => showCategories(category)} className='categoryCard'>
                <h3>{category.strCategory}</h3>
                <img src={category.strCategoryThumb}/>
            </div>
            ))}

    </div>
)
}