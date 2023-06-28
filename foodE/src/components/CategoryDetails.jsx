import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CategoryDetails (props) {

    const [category, setCategory] = useState('')
    let { strCategory } = useParams() 

    useEffect(() => {
        let selectedCategory = props.categories.find((category) => category.strCategory === strCategory)

        setCategory(selectedCategory)
    }, [props.categories, strCategory])

    return category ? (
        <div className='detail'>
            <h4>{category.strCategory}</h4>
            <img src={category.strCategoryThumb}/>
            <p>{category.strCategoryDescription}</p>
        </div>
    )
    
: null}