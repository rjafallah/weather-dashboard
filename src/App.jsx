import { useState } from "react"
import Search from "./components/Search"
import Weather from "./components/Weather"
import Forecast from "./components/Forecast"
import Toggle from "./components/Toggle"
import "./App.css"

const API_KEY = "e22d22045e02ba4b7ab3250defb72e30"

function App() {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [darkMode, setDarkMode] = useState(false)
  const [error, setError] = useState("")

  const fetchWeather = async (city) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`
      )
      if (!res.ok) throw new Error("Ville introuvable")
      const data = await res.json()
      setWeather(data)
      setError("")
      const res2 = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=fr`
      )
      const data2 = await res2.json()
      setForecast(data2)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <h1>Dashboard Météo</h1>
      <Search onSearch={fetchWeather} />
      {error && <p>{error}</p>}
      {weather && <Weather data={weather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  )
}

export default App