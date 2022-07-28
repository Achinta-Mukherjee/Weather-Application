import React from "react";
import './weather.css';

// Different weather components logo stored in their names
export const WeatherInfoIcon={
    Sunset:'/icons/temp.svg',
    Sunrise:'/icons/temp.svg',
    Humidity:'/icons/humidity.svg',
    Wind:'/icons/wind.svg',
    Pressure:'/icons/pressure.svg'
}

// Component to get the weather details like sunrise, humidity, sunset... along with icon
const Weatherinfocomponent =(props) =>{
    const {name, value} = props;
    return(
        <div className="info-container">
            <img className="info-icon" src={WeatherInfoIcon[name]}></img>
            <span className="info-label">{value}<span>{name}</span></span>
        </div>
    )
}

const Weather = () =>{
    return(
        <div className="weather-div">
            {/* Weather temperature and logo on weather page */}
            <div className="temp-and-logo">
                <div>
                    <span className="condition"><span className="condition-temp">30 C</span> | Overcast Cloudy</span>
                </div>
                <div>
                    <img className="perfect-day-logo" src="/icons/perfect-day.svg" alt="perfect-day-logo"></img>
                </div>
            </div>

            {/* Location */}
            <div className="weather-location">
                <span className="location">London, GB</span>
            </div>

            {/* Weather Info tag*/}
            <div className="weather-detail">
                <span className="weather-info-label">Weather Info</span>
            </div>

            {/* Weather detailed info */}
            <div className="info-container-div">
                <Weatherinfocomponent name="Sunrise" value="7865"/>
                <Weatherinfocomponent name="Humidity" value="7867"/>
                <Weatherinfocomponent name="Wind" value="37895"/>
                <Weatherinfocomponent name="Pressure" value="247"/>
            </div>     
        </div>
    )
}


export default Weather;