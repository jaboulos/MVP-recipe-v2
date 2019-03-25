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
                {/* <img
                  className= 'class-img'
                  alt='Gallery'
                  src={'https://s3.us-east-2.amazonaws.com/espn-feed-photos/espn+images/lg1.jpg'}
                /> */}
                Track 1
                </div>

            )
          })
        }
      </div>
    )
  }
}


export default Gallery;
