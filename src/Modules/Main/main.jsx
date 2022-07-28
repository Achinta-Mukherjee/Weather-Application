import React, { useState } from "react";
import City from "../City/city";
import Weather from "../Weather/weather";
import './main.css';

const Main =() =>{
    const [city, updateCity] = useState();
    const [weather, updateWeather] = useState();

    const fetchWeather =() =>{}

    return(
        <div className="container-fluid">
            <div className="row main">
                <span className="heading">The Weather App</span>
                <City updateCity={updateCity} fetchWeather={fetchWeather}/>
                {/* <Weather /> */}
                <div className="footer-div">
                    <span className="footer">@created by Achinta Mukherjee</span>
                </div>
            </div>
            
        </div>
    )
}

export default Main;