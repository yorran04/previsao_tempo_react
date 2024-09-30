import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import Weatherinfo from './Components/Weather/Weatherinfo'
import Weatherinfo5days from './Components/Weatherinfo5days/Info5days'



function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()
  const inputRef = useRef() 

  async function SeachCity (){
    
    const city = inputRef.current.value
    const key = "a7ea8755b78910311cd1705b397d9e64"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`
    
    const apiData = await axios.get(url)
    const apiInfo5days = await axios.get(url5days)

    setWeather(apiData.data)
    setWeather5Days(apiInfo5days.data)
    
  }

  return (
    <div className='contanier'>
      <h2 className='paragrafo'>Previsão do Tempo</h2>
      <div className='seach-content'>
      <input ref={inputRef} type='text' placeholder='Digite um cidade'/>
      <button onClick={SeachCity}>Buscar</button>
      </div>
    {weather && < Weatherinfo dados={weather}/>}
    {weather5Days && < Weatherinfo5days weather5Days={weather5Days}/>}
    </div>
  )
}

export default App
