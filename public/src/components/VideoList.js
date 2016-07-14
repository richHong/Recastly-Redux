import React, { Component } from 'react';
import VideoListEntry from './videoListEntry';

const VideoList = ({ videos, addVideo }) => (
  <div className="video-list media">
    {videos.map((video,i) => {
      return <VideoListEntry key={ i } video={ video } addVideo={ addVideo }/>
    })}
  </div>
);

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

export default VideoList;
