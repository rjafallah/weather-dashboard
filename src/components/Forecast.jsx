function Forecast({ data }) {
  const daily = data.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  )

  return (
    <div>
      <h3>Prévisions 5 jours</h3>
      {daily.map((item) => (
        <div key={item.dt}>
          <p>{item.dt_txt.split(" ")[0]}</p>
          <p>{Math.round(item.main.temp)}°C</p>
          <p>{item.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            alt="icône"
          />
        </div>
      ))}
    </div>
  )
}

export default Forecast