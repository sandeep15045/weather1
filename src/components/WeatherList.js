import React from 'react'
const WeatherCard = ({dt, temp_min, main}) => {
    const date = new Date(dt);
    return (
      <div>
        {main}<br/>
            <b>Date: </b>{date.toLocaleDateString()}<br/>
            <b>Time: </b>{date.toLocaleTimeString()}
           <p><b>Min: </b>{Math.round(temp_min-273)}℃</p>
  
  
      </div>
    );
  };
  

const WeatherList = ({weathers}) => {
    return (
        <div style={{display:"flex", justifyContent:"space-between"}}>
           {weathers.map(({dt,main, weather}) => (
                <div key={dt}>
                    <WeatherCard temp_min={main.temp_min} dt={dt * 1000} main={weather[0].main} />
                </div>
            ))} 
        </div>
    )
}

export default WeatherList;

