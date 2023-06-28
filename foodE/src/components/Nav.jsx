import { Link } from 'react-router-dom'

export default function () {
    return (
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/foodsearch'>Search</Link>
            <Link to='/categories'>Categories</Link>
        </div>
    )
}