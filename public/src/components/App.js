import React, { Component } from 'react';
import Nav from './nav';
import VideoPlayer from './videoPlayer';
import VideoList from './videoList';
import exampleVideoData from '../../data/exampleVideoData';
import YOUTUBE_API_KEY from '../../config';
import $ from 'jquery';
import { connect } from 'react-redux';

class App extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={ this.props.video }/>
        </div>
        <div className="col-md-5">
          <VideoList videos={ this.props.videos } />
        </div>
      </div>
    )}
}

function mapStateToProps(state){
  return {
    video: state.video,
    videos: state.videos
  }
}

export default connect (mapStateToProps) (App);
