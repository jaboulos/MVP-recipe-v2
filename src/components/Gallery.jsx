import React, { Component } from 'react';

import './AudioPlayer';

class Gallery extends Component {
  playAudio(previewUrl) {
    let audio = new Audio(previewUrl);
    audio.play()
  }

  render() {
    const { tracks } = this.props;
    return(
      <div>
        {
          tracks.map((track, k) => {
            console.log('track ', track)
            return(

                <div
                  key={k}
                  className="track"
                  onClick={()=>this.playAudio(track)}
                >
                PLAY TRACK ONE
                </div>

            )
          })
        }
      </div>
    )
  }
}


export default Gallery;
