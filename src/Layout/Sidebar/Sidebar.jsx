import React, { useContext } from 'react'
import './sidebar.css'
import WeatherContext from '../../context/weatherContext';

const Sidebar = () => {
  const { weatherData, loading, setQuery } = useContext(WeatherContext);
  const fiveCountries = [
    {
      id: 1,
      name: "London"
    },
    {
      id: 2,
      name: "Delhi"
    },
    {
      id: 3,
      name: "USA"
    },
    {
      id: 4,
      name: "Kerala"
    },
    {
      id: 5,
      name: "Mumbai"
    },

  ];
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!weatherData) {
    return <div>No weather data available</div>;
  }


  return (
    <aside className="sidebar">
   <div className='sidebar-container'>
       <h2>Popular Cities</h2>
        <div className='cities_row'>

            {
              fiveCountries.map((data,i) => {
                const icon = weatherData.daily[i]?.icon;
                return(
                  <>
                  <a href='#' onClick={() =>setQuery({q : data.name}) } key={i}>
                  <div className='city'>
                  <div className='text'>
                         {/*<h5>US</h5>*/}
                         <h2>{data.name}</h2>
                         <p>Cloudy</p>
                         </div>
                       <div className='city_details'>  
                         <img src={icon} />
              
                       </div>
                  </div>
                  </a>
              
                  </>
                )
              })
            }
            
        </div>
   </div>
</aside>
  )
}

export default Sidebar
