import React from "react";
import './city.css';

const City =(props) =>{
    const{updateCity, fetchWeather} = props;
    return(
        <div className="city-div">        
            {/* Weather Logo on searh city page */}
            <div>
                <img className="perfect-day-logo" src="/icons/app-logo.png" alt="perfect-day-logo"></img>
            </div>

            {/* Find Weather of your city tagline */}
            <div>
                <span className="find-weather">Find Weather of Your City</span>
            </div>

            {/* Searchbar to seacrch city */}
            <div className="searchbar" onSubmit={fetchWeather}>
                <input className="input-city" type="search" placeholder="City" onChange={(e)=>updateCity(e.target.value)}/>
                <button className="search-city" type="submit">Search</button>
            </div>
        </div>
    )
}

export default City;