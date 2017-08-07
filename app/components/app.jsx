//=================
// Import the dependencies that this component will need
// to function properly
//=================
import _ from 'lodash';
import React, { Component } from "react";
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoLists from './video_list_container';
import VideoContainer from './video_container';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/index.scss';

const YOUTUBE_API = 'AIzaSyB53BYk6wmOUXItWi96x7w440tjLlamP0k';

//=================
// This is the component we'll be exporting into the
// #app element on the index.html file.
//=================
export default class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos : [],
      selectedVideo : null
    };
    this.videoSearch('bollywood songs');
  }

  videoSearch(term){
    YTSearch({key: YOUTUBE_API, term : term}, (videos) => {
      this.setState({
        videos : videos,
        selectedVideo : videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div className="row">
        <SearchBar
          onSearchTermChange= { videoSearch } />

        <VideoContainer
          video={this.state.selectedVideo} />

        <VideoLists
          onVideoSelect = {selectedVideo => this.setState ({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}
