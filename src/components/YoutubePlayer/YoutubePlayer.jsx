/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import YouTube from 'react-youtube';

class Example extends React.Component {
    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
  render() {
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return <YouTube 
            videoId="2g811Eo7K8U" 
            opts={opts} 
            onReady={this.videoOnReady} 
            />;
  }

 
}
export default Example