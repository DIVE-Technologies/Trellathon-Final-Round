import { Component } from "react";
import { GoogleApiWrapper, Map, HeatMap } from "google-maps-react";
import "../Components/styles.css";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

const gradient = [
  "rgba(0, 255, 255, 0)",
  "rgba(0, 255, 255, 1)",
  "rgba(0, 191, 255, 1)",
  "rgba(0, 127, 255, 1)",
  "rgba(0, 63, 255, 1)",
  "rgba(0, 0, 255, 1)",
  "rgba(0, 0, 223, 1)",
  "rgba(0, 0, 191, 1)",
  "rgba(0, 0, 159, 1)",
  "rgba(0, 0, 127, 1)",
  "rgba(63, 0, 91, 1)",
  "rgba(127, 0, 63, 1)",
  "rgba(191, 0, 31, 1)",
  "rgba(255, 0, 0, 1)",
];

const data = [
  { lat: 28.7, lng: 77.1 },
  { lat: 28.7, lng: 77.1 },
  { lat: 28.7, lng: 77.1 },
  { lat: 28.7, lng: 77.1 },

  { lat: 28.7, lng: 77.1 },
  { lat: 28.7, lng: 77.1 },
  { lat: 28.7, lng: 77.1 },
  { lat: 28.7, lng: 77.1 },

  { lat: 23.7, lng: 77.1 },
  { lat: 23.7, lng: 77.1 },
  { lat: 23.7, lng: 77.1 },
  { lat: 23.7, lng: 77.1 },

  { lat: 28.91, lng: 77.1025, weight: 5 },
  { lat: 28.9101, lng: 77.1025, weight: 3 },
  { lat: 28.9102, lng: 77.1025, weight: 3 },
  { lat: 28.9103, lng: 77.1025, weight: 3 },

  { lat: 28.7041, lng: 77.1025 },
  { lat: 28.7041, lng: 77.1025 },
  { lat: 28.7041, lng: 77.1025 },
  { lat: 28.7041, lng: 77.1025 },
];

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
    };
  }

  handleLocation = (value) => {
    this.setState(() => ({
      location: value,
    }));
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Header />
        <Map
          maxZoom={12}
          google={this.props.google}
          className="map"
          initialCenter={{
            lat: 28.7041,
            lng: 77.1025,
          }}
          zoom={10}
        >
          <HeatMap
            gradient={gradient}
            dissipating={true}
            positions={data}
            opacity={1}
            radius={20}
          />
        </Map>
        <div className="Search">
          <Link
            className="link"
            to={{
              pathname: "/Search",
              state: {
                searchComponent: "Search",
              },
            }}
          >
            <i className="fa fa-search" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="Search">
          <Link
            className="link"
            to={{
              pathname: "/Search",
              state: {
                searchComponent: "trending",
              },
            }}
          >
            <i className="fas fa-chart-line"></i>
          </Link>
        </div>
        <div className="Search">
          <Link
            className="link"
            to={{
              pathname: "/Search",
              state: {
                searchComponent: "entertainment",
              },
            }}
          >
            <i className="fas fa-film"></i>
          </Link>
        </div>
        <div className="Search">
          <Link
            className="link"
            to={{
              pathname: "/Search",
              state: {
                searchComponent: "travel",
              },
            }}
          >
            <i className="fas fa-map-marked-alt"></i>
          </Link>
        </div>
        {/* <div className="container-fluid p-0 m-0 panel" id="panel">
          <div className="row m-0">
            <div className="col-12 drawer">
              <input
                type="text"
                className="inputField"
                placeholder="Search"
                onChange={(e) => this.handleLocation(e.target.value)}
              />
              <ShowVideo />
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyABGpKJdgQQIZW7WCWxgcZbO8gbUbwAdEk",
  libraries: ["visualization"],
})(HomePage);
