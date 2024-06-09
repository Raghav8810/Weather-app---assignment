import React, { useContext } from 'react'
import './highlight.css'
import { Droplet, Eye, Moon, Sun, ThermometerSun, Waves, Wind } from 'lucide-react'
import WeatherContext from '../../context/weatherContext'
const Highlights = () => {
   const { weatherData,loading } = useContext(WeatherContext);

   if (loading) {
      return <div className='loading'>Loading...</div>;
    }
    if (!weatherData) {
      return <div>No weather data available</div>;
    }
    console.log(weatherData);
  
  return (
    <div className="container">
  <h6 className="heading-high">Today Highlights</h6>
  <div className="row row1">
    <div className="column high-col">
       <div className='quality_index'>
          <p>Air Quality Index</p>
           <p>{weatherData.details}</p>
       </div>

       <div className='temp_details'>
                 <Wind className='windIcon' size={65} />
             <div className='wind'>
                <p>Wind</p>
                <h3>{weatherData.speed}km/h</h3>
             </div>
             <div className='wind'>
                <p>deg</p>
                <h3>43</h3>
             </div>
       </div>
    </div>
    <div className="column high-col">
    <div className='quality_index'>
      <p>Sunrise& Sunset</p>
 </div>

 <div className='temp_details '>
    
        <div className='sunrise '>
        <Sun className='windIcon' size={65} />
           <div className='wind'>
            <p>sunrise</p>
           <h3>{weatherData.sunrise}</h3>
       </div>
        </div>
        <div className='sunset'>
        <Moon className='windIcon' size={65} />
           <div className='wind'>
            <p>sunset</p>
           <h3>{weatherData.sunset}</h3>
       </div>
        </div>
 </div>
    </div>
  </div>

  <div className="row row2">
    <div className="column high-col">
    <div className='airdetails'>
    <p className='airdetails'>Humidity</p>
    <div className='aridetails_values'>
    <Droplet className='windIcon' size={65} />
       <h3>{weatherData.humidity}%</h3>
    </div>
</div>
    </div>


    <div className="column high-col"> <div className='airdetails'>
         <p className='airdetails'>Pressure</p>
         <div className='aridetails_values'>
         <Waves className='windIcon' size={65} />
            <h3>43%</h3>
         </div>
    </div>
    </div>


    <div className="column high-col"> <div className='airdetails'>
         <p className='airdetails'>Visibility</p>
         <div className='aridetails_values'>
         <Eye className='windIcon' size={65} />
            <h3>{weatherData.visibility}%</h3>
         </div>
    </div>
    
    </div>


    <div className="column high-col"> <div className='airdetails'>
         <p className='airdetails'>Feels Like</p>
         <div className='aridetails_values'>
            <ThermometerSun className='windIcon' size={65} />
            <h3>{weatherData.feels_like}%</h3>
         </div>
    </div>
    </div>
  </div>
</div>
  )
}

export default Highlights
