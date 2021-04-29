import { Component } from "react";
import { GoogleApiWrapper, Map, HeatMap } from "google-maps-react";
// import env from 'react-dotenv';
import '../Components/styles.css';

// console.log(env.GOOGLE_APIKEY)

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

  { lat: 28.7060, lng: 77.1025 },
  { lat: 28.7062, lng: 77.1025 },
  { lat: 28.7063, lng: 77.1025 },
  { lat: 28.7064, lng: 77.1025 },

  { lat: 23.7080, lng: 77.1025 },
  { lat: 23.7081, lng: 77.1025 },
  { lat: 23.7082, lng: 77.1025 },
  { lat: 23.7083, lng: 77.1025 },

  { lat: 28.9100, lng: 77.1025 },
  { lat: 28.9101, lng: 77.1025 },
  { lat: 28.9102, lng: 77.1025 },
  { lat: 28.9103, lng: 77.1025 },

  { lat: 28.7041, lng: 77.1025 },
  { lat: 28.7041, lng: 77.1025 },
  { lat: 28.7041, lng: 77.1025 },
  { lat: 28.7041, lng: 77.1025 },
];

export class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-2 drawer">
            <div className='drawer'>Hello</div>
          </div>
          <div className="col-10">
            <Map
              google={this.props.google}
              initialCenter={{
                lat: 28.7041,
                lng: 77.1025,
              }}
              zoom={15}
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
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyABGpKJdgQQIZW7WCWxgcZbO8gbUbwAdEk',
  libraries: ["visualization"],
})(HomePage);
