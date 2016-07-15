import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addVideo } from '../actions/actions'

class VideoListEntry extends Component{
  addVideo(e, video){
    e.preventDefault();
    this.props.dispatch(addVideo(video));
  }
  render(){
    let { video } = this.props
    return(
    <div className="video-list-entry" onClick={ e => this.addVideo(e, video) }>
      <div className="media-left media-middle">
        <img className="media-object" src={ video.snippet.thumbnails.default.url } alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">{ video.snippet.title }</div>
        <div className="video-list-entry-detail">{ video.snippet.description }</div>
      </div>
    </div>
  );
  }
}
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

export default connect () (VideoListEntry);
