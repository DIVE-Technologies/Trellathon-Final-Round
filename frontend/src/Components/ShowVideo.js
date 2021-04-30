import VideoPlayer from "react-video-js-player";
import { Component } from "react";
import './styles.css'
import Poster from '../assets/images/Poster.png'
import 'reactjs-popup/dist/index.css';

const data = [
  {
    index: 1,
    url: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    poster: {Poster}
  },
  {
    index: 2,
    url: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    poster: {Poster}
  },
]

class ShowVideo extends Component {
  render() {
    return (
      data.map(video => 
      <VideoPlayer key={video.index} className='videoPlayer'
      src={video.url}
      poster={video.poster}
      />
      )
    );
  }
}

export default ShowVideo;
