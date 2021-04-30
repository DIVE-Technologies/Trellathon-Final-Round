import { Component } from "react";
import Header from "../Components/Header";
import ShowVideo from "../Components/ShowVideo";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
    };
  }

  handleInput = (value) => {
    this.setState(() => ({
      location: value,
    }));
    console.log(this.state);
  };

  getVideos() {
      for(var i=0;i<10;++i)
        <ShowVideo />
  }

  // componentDidMount() {
  //     alert(this.props.location.state.searchComponent)
  // }
  
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <input
                type="text"
                onChange={(e) => this.handleInput(e.target.value)}
                placeholder="Search"
                className='inputField'
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              {this.getVideos()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
