import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addVideos } from '../actions/actions';
import YOUTUBE_API_KEY from '../../config.js';
import $ from 'jquery';

class Search extends Component{

  searchYoutube(e, input){
    e.preventDefault();
 
    let options = {
      part:'snippet',
      type:'video',
      videoEmbeddable: 'true',
      key: YOUTUBE_API_KEY,
      q: input,
      maxResults: 5
    };

    $.get('https://www.googleapis.com/youtube/v3/search', options, data => {
      this.props.dispatch(addVideos(data));
    });
  }
  render(){
    return (
    <div className="search-bar form-inline">
      <form onSubmit={ e => this.searchYoutube(e, this.searchText.value) }>
        <input className="form-control" type="text" ref={ input => this.searchText = input } />
        <button className="btn hidden-sm-down" onClick={ e => this.searchYoutube(e, this.searchText.value) }>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </form>
    </div> 
    );
  }
}
export default connect () (Search);
