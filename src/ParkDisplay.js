import React, {Component} from "react";
import Loading from "./Loading";

class ParkDisplay extends Component {
    constructor() {
        super();
        this.state = {
            parkData: null
        };
    }
    componentDidMount() {
        const zip = this.props.zip;
        const URL = "https://api.tfl.gov.uk/Occupancy/CarPark/"+zip;
        fetch(URL).then(res => res.json()).then(json => {
            console.log(json)
            this.setState({ parkData: json });
        });
    }
    render() {
        const parkData = this.state.parkData;
        if (!parkData) return (<Loading/>);
        return (
            <div>
                <h1>
                    The occupancy for a car park {parkData.name}
                </h1>
                <div className="box content">
                    <p>Type: {parkData.bays[0].bayType}</p>
                    <p>Count: {parkData.bays[0].bayCount}</p>
                    <p>Free: {parkData.bays[0].free}</p>
                    <p>Occupied: {parkData.bays[0].occupied}</p>
                </div>
                <div className="box">
                    <p>Type: {parkData.bays[1].bayType}</p>
                    <p>Count: {parkData.bays[1].bayCount}</p>
                    <p>Free: {parkData.bays[1].free}</p>
                    <p>Occupied: {parkData.bays[1].occupied}</p>
                </div>
            </div>
        );
    }
}

export default ParkDisplay;