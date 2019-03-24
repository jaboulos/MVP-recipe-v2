import React, { Component } from 'react';
import '../App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon, Button } from 'react-bootstrap';

class AudioPlayer extends Component {
  render() {
    return (
      <div className="Audioplayer">
        <div className="Audioplayer-title">Audio Player</div>
       {/* React-Bootstrap components */}
        <FormGroup>
          {/* wrap form control with InputGroup */}
          <InputGroup>
            {/* this is the equivalent of an input field, FormControl is also self-closing */}
            <FormControl
              type="text"
              placeholder="Search for an artist..."
              />
              {/* react-bootstrap has some cool add-ons, this inputgroup.add-on changes the button icon on this form, find more in the react bootstrap documentation library */}
            {/* <InputGroup.Addon>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon> */}
            <Button>PLAY SOME MUSIC!</Button>
          </InputGroup>
        </FormGroup>
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