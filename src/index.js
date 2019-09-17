import ReactDOM from "react-dom";
import Spinner from "./Spinner";
import React, { Component } from "react";
import SeasonDispaly from "./SeasonDispaly";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude
        }),
      err => {
        this.setState({
          message: err.message
        });
      }
    );
  }

  render() {
    if (this.state.lat && !this.state.message) {
      return <SeasonDispaly lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.message) {
      return <div>error: {this.state.message}</div>;
    }
    return <Spinner />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
