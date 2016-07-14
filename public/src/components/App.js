import React, { Component } from 'react';
import Nav from './nav';
import VideoPlayer from './videoPlayer';
import VideoList from './videoList';
import exampleVideoData from '../../data/exampleVideoData';
import YOUTUBE_API_KEY from '../../config';
import $ from 'jquery';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      video: exampleVideoData[0],
      videos: exampleVideoData
    };
    this.addVideo = this.addVideo.bind(this);
    this.searchVideos = this.searchVideos.bind(this);
  }

  addVideo(e, video){
    this.setState({ video:video });
  }

  searchVideos(e, input){
    e.preventDefault();

    this.searchYouTube({
      part:'snippet',
      type:'video',
      videoEmbeddable: 'true',
      key: YOUTUBE_API_KEY,
      q: input,
      maxResults: 5
    }, data => {
      this.setState({ videos:data.items });
    });
  }

  searchYouTube(options, callback){
    $.get('https://www.googleapis.com/youtube/v3/search', options, callback);
  }

  render() {
    return (
      <div>
        <Nav search={ this.searchVideos }/>
        <div className="col-md-7">
          <VideoPlayer video={ this.state.video }/>
        </div>
        <div className="col-md-5">
          <VideoList videos={ this.state.videos } addVideo={ this.addVideo }/>
        </div>
      </div>
    )}
}

export default App;
