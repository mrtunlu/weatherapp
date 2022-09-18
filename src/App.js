import React, { useState } from "react";
import axios from 'axios'

export const App = () => {

  const[data,setData]=useState({})
  const[location,setLocation]=useState('')


  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5d10c325cd6e5e622b6e25605370bf1d`

  const searchLocation = (event)=>{
    if(event.key=== 'Enter') { 
      axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response)
    })
  setLocation('')
    }
  }

  return (
 <div className="app">
   <div className="search">
     <input
     value={location}
     onChange={event => setLocation(event.target.value)}
     placeholder='Konumu giriniz'
     onKeyPress={searchLocation}
     type='text'>
     </input>
   </div>
   <div className="container">
     <div className="top">
       <div className="location">
         <p>{data.name}</p>
       </div>
       <div className="temp">
          {data.main ? <h1>{Math.round(data.main.temp-272.15)}°C</h1> : null} 
       </div>
       <div className="description">
         {data.weather ? <p>{data.weather[0].main}</p> :null}
       </div>
     </div>
    {data.name !== undefined &&
        <div className="bottom">
        <div className="feels">
          {data.main ? <p className='bold'>{Math.round(data.main.feels_like-272.15)}°C</p>:null}
          <p className="bold">Hissedilen</p>
        </div>
        <div className="humidity">
          {data.main ? <p className="bold">{data.main.humidity} %</p>:null}
          <p className="bold">Nem</p>
        </div>
        <div className="wind">
          {data.wind ?<p className="bold">{data.wind.speed} km/sa</p>:null}
          <p className="bold">Rüzgar hızı</p>
        </div>
      </div> 
   }


   </div>

 </div>
  );
}

export default App;
