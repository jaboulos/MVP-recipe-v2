import React, { Component } from 'react';

class AudioPlayer extends Component {
  render() {
    return (
      <div className="Audioplayer">
        <div className="Audioplayer-title">Audio Player</div>
        <div>
          <input placeholder="search for an artist..."/>
          <button>CLICK THIS BUTTON</button>
        </div>
        <div className="Profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div className="Gallery">
          Gallery
        </div>
      </div>
    )
  }
}

export default AudioPlayer;