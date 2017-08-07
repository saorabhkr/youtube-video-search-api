import React, { Component } from 'react'

export default class VideoListItem extends Component {
  render(){
    const videoObj = this.props.video;
    const imageUrl = this.props.video.snippet.thumbnails.default.url;
    return(
      <li onClick={() => this.props.onVideoSelect(videoObj)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">{this.props.video.snippet.title}</div>
          </div>
        </div>
      </li>
    )
  }
}
