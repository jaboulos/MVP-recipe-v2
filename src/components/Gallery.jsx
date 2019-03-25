import React, { Component } from 'react';

import './AudioPlayer';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state={
      playingUrl: '',
      audio: null,
      playing: false
    }
  }

  playAudio(previewUrl) {
    let audio = new Audio(previewUrl);
    if(!this.state.playing) {
      audio.play()
      this.setState({
        playing: true,
        playingUrl: previewUrl,
        audio
      })
    } else {
      if (this.state.playingUrl === previewUrl) {
        this.state.audio.pause();
        this.setState({
          playing: false
        })
      } else {
        this.state.audio.pause();
        audio.play();
        this.setState({
          playing: true,
          playingUrl: previewUrl,
          audio
        })
      }
    }
  }

  render() {
    const { tracks } = this.props;
    return(
      <div>
        {
          tracks.map((track, k) => {
            console.log('track ', track)
            return(
                <div key={k} className="track" onClick={()=>this.playAudio(track)}>
                  <div>PLAY TRACK</div>
                  <div className="track-play">
                    <div className="track-play-inner">
                      {/* &#9654; */}
                      {
                        this.state.playingUrl === track
                          ? <span>||</span>
                          : <span>&#9654;</span>
                      }
                    </div>
                    </div>
                </div>

            )
          })
        }
      </div>
    )
  }
}


export default Gallery;
