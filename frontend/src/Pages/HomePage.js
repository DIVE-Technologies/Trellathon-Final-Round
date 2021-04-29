import { Component } from "react";
import { GoogleApiWrapper, Map, HeatMap } from "google-maps-react";
import "../Components/styles.css";
import TrendingVideos from "../Components/TrendingVideos";
import ShowVideo from "../Components/ShowVideo";

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
  { lat: 28.7041, lng: 77.1025 },
  { lat: 28.7042, lng: 77.1026 },
  { lat: 28.7043, lng: 77.1027 },
  { lat: 28.7044, lng: 77.1028 },

  { lat: 28.706, lng: 77.1025 },
  { lat: 28.7062, lng: 77.1025 },
  { lat: 28.7063, lng: 77.1025 },
  { lat: 28.7064, lng: 77.1025 },

  { lat: 23.708, lng: 77.1025 },
  { lat: 23.7081, lng: 77.1025 },
  { lat: 23.7082, lng: 77.1025 },
  { lat: 23.7083, lng: 77.1025 },

  { lat: 28.91, lng: 77.1025 },
  { lat: 28.9101, lng: 77.1025 },
  { lat: 28.9102, lng: 77.1025 },
  { lat: 28.9103, lng: 77.1025 },

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

  togglePanel = () => {
    var panel = document.getElementById("panel");
    console.log(panel);
    // panel.style.display === 'block' ? panel.style.display === 'none' : panel.style.display === ' block'
  };

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          className="map"
          initialCenter={{
            lat: 28.7041,
            lng: 77.1025,
          }}
          zoom={10}
          // style={{ zIndex: -1 }}
          onClick={this.onMapClicked}
        >
          <HeatMap
            gradient={gradient}
            dissipating={true}
            positions={data}
            opacity={1}
            radius={20}
          />
        </Map>
        <div
          // onClick={() => this.togglePanel()}
          className="Search"
        >
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>
        <div
          // onClick={() => this.togglePanel()}
          className="Search"
        >
          <i class="fas fa-chart-line"></i>
        </div>
        <div
          // onClick={() => this.togglePanel()}
          className="Search"
        >
          <i class="fas fa-film"></i>
        </div>
        <div
          // onClick={() => this.togglePanel()}
          className="Search"
        >
          <i class="fas fa-map-marked-alt"></i>
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
