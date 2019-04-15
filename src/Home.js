import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AirQuality from "./AirQuality";
import "./Home.css";
import "./GoBack.css";
import car from './img/car.png';

class Home extends Component {
    render() {
        return(
            <div className="home">
                <h1>WELCOM! <img src={car}/></h1>
                <AirQuality/>
                <h2>Gets the occupancy for all car parks</h2>
                <Link to="/carparks" className="buttom">Get!</Link>
            </div>
        )
    }
}
export default Home
