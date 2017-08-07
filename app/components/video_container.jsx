import React, { Component } from 'react'

export default class VideoContainer extends Component {
  render() {
      if (!this.props.video) {
        return (
          <div className="showbox">
            <div className="loader">
              <svg className="circular" viewBox="25 25 50 50">
                <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
              </svg>
            </div>
          </div>
        )
      }
      const videoId = this.props.video.id.videoId;
      const url = 'https://www.youtube.com/embed/'+videoId;
      return(
        <div className="video-detail col-sm-8">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url} />
          </div>
          <div className="details">
            <h2>{this.props.video.snippet.title}</h2>
            <h3>{this.props.video.snippet.description}</h3>
          </div>
        </div>
      );
  }
}
