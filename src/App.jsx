import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardWeather from './components/CardWeather'

function App() {
  const [obj, setObj] = useState({})
  const [weather, setWeather] = useState()

  const [iscelsius, setCelsius] = useState(true)
  const [degree, setDegree] = useState()



       useEffect(()=>{
       const success = pos => {
         const lon = pos.coords.longitude
         const lat  = pos.coords.latitude
         setObj({lat,lon})
       }
       navigator.geolocation.getCurrentPosition(success)

     },[])

    
      useEffect(()=>{
        if(obj.lat !== undefined){
          const API_KEY = '7c4709b41ea878a26eac981bf17e960a'
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${obj?.lat}&lon=${obj?.lon}&mode=json&units=metric&appid=${API_KEY}`
          axios.get(url)
          .then(res => {
            setWeather(res.data) 
            const celsius =res.data.main.temp
            const faren    =res.data.main.temp * 9 / 5 + 32
            console.log(celsius)
            console.log(faren)
            setDegree({celsius,faren}) 
               
               
        })
        .catch(err => console.log(err))
       }  
      },[obj])
    

     
  const changeDegree =()=>setCelsius(!iscelsius)

  
  return (
    <div className='App'>
      <CardWeather weather={weather}
      changeDegree={changeDegree} 
      degree={degree}
      iscelsius={iscelsius}
      
     
     
      />
     
    </div>
  )
}

export default App
