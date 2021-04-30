import VideoPlayer from "react-video-js-player";
import { Component } from "react";
import './styles.css'

class ShowVideo extends Component {
  render() {
    return (
      <VideoPlayer className='videoPlayer'
      poster='https://images.unsplash.com/photo-1619694773412-64dd5bb9159d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80'
      src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
      />
    );
  }
}

export default ShowVideo;
