/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React  from 'react';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';


class YoutubeIframe extends React.Component {
    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    videoOnEnd(event) {
        event.target.playVideo();
    }
  render() {
    const opts = {
      height: '480',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        loop: 1,
        mute: 0,
        autoplay: 1,
        controls: 1,
        showinfo: 0,
      },
    };
    const {videoId} = this.props
    return <YouTube 
            videoId={videoId} 
            opts={opts} 
            onReady={this.videoOnReady}
            onEnd = {this.videoOnEnd} 
            />;
  }

 
}

export default YoutubeIframe
YoutubeIframe.propTypes = {
    videoId : PropTypes.string
  };