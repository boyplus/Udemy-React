import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
    constructor(props) {
        super(props);
        //this is the only time that we do direct assign
        this.state = { lat: null, errorMessage: "" };
        window.navigator.geolocation.getCurrentPosition(
            //this function is run in the background
            position => {
                this.setState({ lat: position.coords.latitude });
                console.log(this.state.lat);
            },
            err => {
                //we have to re render the component use setState();
                console.log(err);
                this.setState({ errorMessage: err.message });
            }
        );
    }
    //react say we have to define render!!
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        else if (!this.state.errorMessage && this.state.lat) {
            return <div>Lattitude: {this.state.lat}</div>
        }
        else {
            return <div>Loading...</div>
        }
    }
}
ReactDOM.render(<App />, document.querySelector("#root"));
