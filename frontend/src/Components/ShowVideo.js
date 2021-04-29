import { Player } from "video-react";
import { Component } from "react";
import './styles.css'

class ShowVideo extends Component {
  render() {
    return (
      <Player className='videoPlayer'>
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      </Player>
    );
  }
}

export default ShowVideo;
