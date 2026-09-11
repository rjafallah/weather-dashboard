function Weather({ data }) {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>{Math.round(data.main.temp)}°C</p>
      <p>{data.weather[0].description}</p>
      <p>Humidité : {data.main.humidity}%</p>
      <p>Vent : {Math.round(data.wind.speed)} km/h</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="icône météo"
      />
    </div>
  )
}

export default Weather