import React, { Component } from 'react'
import VideoListItem from './video_list_items'

export default class VideoLists extends Component {
  render() {
    const videoItems = this.props.videos.map( video => {
      return (
        <VideoListItem
          onVideoSelect={this.props.onVideoSelect}
          key={video.etag}
          video={video} />
      );
    });
    return (
      <ul className="col-sm-4">
        {videoItems}
      </ul>
    );
  }
}
