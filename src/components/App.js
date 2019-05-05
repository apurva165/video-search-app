import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../api/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.onSearchSubmit("trees");
  }

  onSearchSubmit = term => {
    youtube
      .get("/search", {
        params: {
          q: term
        }
      })
      .then(res => {
        this.setState({
          videos: res.data.items,
          selectedVideo: res.data.items[0]
        });
      });
  };

  onVideoSelect = video => {
    //console.log("from the app ");
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar searchResult={this.onSearchSubmit} />
        <VideoDetail selectedVideo={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
