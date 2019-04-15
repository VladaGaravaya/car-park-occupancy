import React, { Component } from 'react';
import Loading from "./Loading";
import './AirQuality.css';

class AirQuality extends Component {
    constructor() {
        super();
        this.state = {
            airQuality: null
        };
    }
    componentDidMount() {
        const URL = 'https://api.tfl.gov.uk/AirQuality';
        fetch(URL).then(res => res.json()).then(json => this.setState ({ airQuality: json}));
    }
    render () {
        const airQuality = this.state.airQuality;
        if(!airQuality) return (<Loading/>);
        return (
            <div id="airQuality">
                <h3>
                    Air quality from {airQuality.currentForecast[0].fromDate.substring(0, 10)} to {airQuality
                    .currentForecast[0].fromDate.substring(0, 10)}:
                </h3>
                <p>{airQuality.currentForecast[0].forecastSummary}</p>
            </div>
        )
    }
}

export default AirQuality;