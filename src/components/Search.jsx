import { useState } from "react"

function Search({ onSearch }) {
  const [city, setCity] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim()) onSearch(city)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Rechercher une ville..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Rechercher</button>
    </form>
  )
}

export default Search