import React from 'react'

const CardWeather = ({weather,changeDegree,degree,iscelsius}) => {

  
  const timeNow = Date.now()
  const now = new Date(timeNow)
  const newTime = now.toUTCString() 


  return (
    <div className='card'>
      <h2>My Weather App</h2>
      <h3>{weather?.name}, {weather?.sys.country}</h3>
      <h4>{newTime}</h4>
      <p><b>Temperature:</b></p>
      {/* <h1>{Math.floor(weather?.main.temp)} &ordm;C</h1> */}
      <h1>{iscelsius ? weather?.main.temp : degree.faren} </h1>
      <center><p>{iscelsius ? 'Celsius' : 'Farenheit'} </p></center>
      <h5>{weather?.weather[0].description}</h5>
      <ul>
        <li><b>Clouds:</b>   {weather?.clouds.all}%</li>
        <li><b>Humidity:</b> {weather?.main.humidity}%</li>
        <li><b>Wind Speed:</b> {Math.floor((weather?.wind.speed*10))} km/h</li>
      </ul>
       
      <button className='btnchange' onClick={changeDegree}>Change Degree &ordm;F/&ordm;C</button>

    </div>
  )
}

export default CardWeather