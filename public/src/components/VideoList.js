import React, { Component } from 'react';
import VideoListEntry from './videoListEntry';

const VideoList = ({videos}) => (
  <div className="video-list media">
    {videos.map((video,i) => <VideoListEntry key={ i } video={ video } />)}
  </div>
);

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

export default VideoList;
