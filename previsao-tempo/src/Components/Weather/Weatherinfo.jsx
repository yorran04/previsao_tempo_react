/* eslint-disable react/prop-types */
import './Weatherinfo.css'

function Weatherinfo({dados}) {
  console.log(dados)
  return (
   
 <div className="container">
  
    <h2>{dados.name}</h2>
  <div className='content-info'>    
    <img src={`http://openweathermap.org/img/wn/${dados.weather[0].icon}.png`} alt="imagem-tempo" />
    <p className='temperatura'>{Math.round(dados.main.temp)}°C</p>
  </div>
    <span>{dados.weather[0].description}</span>
  <div className='content-info-rodape'>
    <p>Máxima: {Math.round(dados.main.temp_max)}°C</p>
    <p>Minima: {Math.round(dados.main.temp_min)}°C</p>
    <p>Umidade: {dados.main.humidity}%</p>
  </div>
 </div>
  );
}

export default Weatherinfo