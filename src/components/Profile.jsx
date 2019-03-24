import React, { Component } from 'react';

import '../App.css';

class Profile extends Component {
  render() {
    // console.log('this.props ', this.props)
    let artist = {
      name: '',
      followers: {total: ''},
      images: [{url: ''}],
      genres: []
    }
    if(this.props.artist !== null) {
      artist = this.props.artist
    }
    return(
      <div className="Profile">
        <img
          alt="Profile"
          className="profile-img"
          src={artist.images[0].url}
        />
        <div className="profile-info">
          <div className="profile-name">Artist: {artist.name}</div>
          <div className="profile-followers">Followers: {artist.followers.total}</div>
          <div className="profile-genres"> Genres: { artist.genres.map((genre, k) => {
            // commas between genres
            genre = genre !== artist.genres[artist.genres.length-1] ? ` ${genre},` : ` & ${genre}`
              return (
              <span key={k}>{genre}</span>
              )
            })
          }
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;