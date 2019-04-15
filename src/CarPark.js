import React, { Component } from "react";
import GoBack from './GoBack';
import "./App.css";
import ParkDisplay from './ParkDisplay';

const PLACES = [
    { name: "Barkingside Stn", zip: "CarParks_800491" },
    { name: "Buckhurst Hill Stn", zip: "CarParks_800468" },
    { name: "Fairlop Stn", zip: "CarParks_800475" },
    { name: "Greenford Stn", zip: "CarParks_800444" },
    { name: "Hainault Stn", zip: "CarParks_800477" },
    { name: "Leytonstone Stn", zip: "CarParks_800481" },
    { name: "Perivale Stn", zip: "CarParks_800456" }
];

class CarPark extends Component {
    constructor() {
        super();
        this.state = {
            activePlace: 0
        };
    }
    render() {
        const activePlace = this.state.activePlace;
        return (
            <div className="App">
                <div>
                    {PLACES.map((place, index) => (
                        <a className="box"
                            key={index}
                            onClick={() => {
                                this.setState({ activePlace: index });
                            }}
                        >
                            {place.name}
                        </a>
                    ))}
                </div>
                <ParkDisplay key={activePlace} zip={PLACES[activePlace].zip} />
                <GoBack/>
            </div>
        );
    }
}

export default CarPark;