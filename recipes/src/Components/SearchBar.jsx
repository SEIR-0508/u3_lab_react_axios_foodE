import { useState } from "react"

const SearchBar = (props) => {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSearch = () => {
    props.getDrinksByName(inputValue)
  }

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          id="search-bar"
          placeholder="Search..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" id="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <p className="pink">Search for your favorite drink to learn how to make it.</p>
    </div>
  )
}

export default SearchBar