/* eslint-disable react/prop-types */
import './Info5days.css'

// eslint-disable-next-line react/prop-types
function Weatherinfo5days({weather5Days}) {
  
  let dailyForecast = {}

  for (let forecast of weather5Days.list) {
      const date = new Date(forecast.dt * 1000).toLocaleDateString()

      if (!dailyForecast[date]) {
          dailyForecast[date] = forecast
      }
  }
  const next5DaysForecast = Object.values(dailyForecast).slice(1, 5)

  function convertDate(date) {
      const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' })

      return newDate
  }
  return (
      <div className='container'>
          <h3 className=''>Previsão Próximos 4 Dias</h3>
          <div className='weather-list'>
              {next5DaysForecast.map(forecast => (
                  <div key={forecast.dt} className='weather-item'>
                      <p className='forecast-day'>{convertDate(forecast)}</p>
                      <img
                          src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                          alt="Weather icon"
                      />
                      <p className='forecast-description'>{forecast.weather[0].description}</p>
                      <p>{Math.round(forecast.main.temp_min)}ºC min /{Math.round(forecast.main.temp_max)}ºC máx</p>
                  </div>
              ))}
          </div>
      </div>
  )
}
export default Weatherinfo5days