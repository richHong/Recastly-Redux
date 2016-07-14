import React, { Component } from 'react';

const VideoListEntry = ({ video, addVideo }) => (
  <div className="video-list-entry" onClick={ e => addVideo(e, video) }>
    <div className="media-left media-middle">
      <img className="media-object" src={ video.snippet.thumbnails.default.url } alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{ video.snippet.title }</div>
      <div className="video-list-entry-detail">{ video.snippet.description }</div>
    </div>
  </div>
);

VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

export default VideoListEntry;
