import React, { Component } from 'react';
import '../App.css';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';


// spotify endpoint, dont need api key
// https://api.spotify.com/v1/search
// documentation page: https://developer.spotify.com/documentation/web-api/reference/search/search/
// access token: http://localhost:8888/#access_token=BQCXXDjU9wbR4i7MmZrjCYAr04zQAv6KH1L5wOeQO5BUKbNWuGqilZZLkZA5ufTESocA-UKjs8y50puWGZSKgs31O-JGmOxesLgn1ljx20FNuhZQfsxQE3pWTO4HWSHmhYjlRlnX3jUixjoVpOsDuvRxlUKOIbNI8x96gG4Z&refresh_token=AQBR0PIzmZFGPrmR6Cl_lDBfTlCVIzdmMplygur8VHxDk3Vv-eqWPR_58Sl2WbgVcaFgCXJHi7_s6hv8Gcc_jytmYy-lgF3d9ZAPe_-1tI8Bl8I0nrKWx8_BuIWD0cYC4qcYXw

// client id: e2d613f9ba5b4b30a041a725626046e6
// client secret: a1bc17e2569a415596350b5ec3a04417
// redirect uri: http://localhost:3000/randomrecipe
//               http://localhost:3000/userpage
class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: null
    }
  }
/*
  // test to see if query is working
  search() {
    // console.log("THIS IS THE STATE: ", this.state);
    // declare spotify search endpoint as a base url
    // question mark at the end of the url allows for more parameters
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    // declare fetch url
    const FETCH_URL = `${BASE_URL}q=this.state.query&type=artist&limit=1`
    console.log('FETCH_URL: ', FETCH_URL)

    const accessToken = 'BQCXXDjU9wbR4i7MmZrjCYAr04zQAv6KH1L5wOeQO5BUKbNWuGqilZZLkZA5ufTESocA-UKjs8y50puWGZSKgs31O-JGmOxesLgn1ljx20FNuhZQfsxQE3pWTO4HWSHmhYjlRlnX3jUixjoVpOsDuvRxlUKOIbNI8x96gG4Z&refresh_token=AQBR0PIzmZFGPrmR6Cl_lDBfTlCVIzdmMplygur8VHxDk3Vv-eqWPR_58Sl2WbgVcaFgCXJHi7_s6hv8Gcc_jytmYy-lgF3d9ZAPe_-1tI'

    //   var myOptions = {
    //     method: 'GET',
    //     headers: {
    //       'authorization': accessToken
    //     },
    //     mode: 'cors',
    //     cache: 'deafult'
    //   }

    //   fetch(FETCH_URL, myOptions)
    //     .then(response => response.json())
    //     .then(json => {
    //       const artist = json.artists.items[0]
    //       this.setState({ artist })
    //     })
  }
*/

search() {
  // console.log('this.state', this.state);
  const BASE_URL = 'https://api.spotify.com/v1/search?';
  const FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';
  var accessToken = 'BQCXXDjU9wbR4i7MmZrjCYAr04zQAv6KH1L5wOeQO5BUKbNWuGqilZZLkZA5ufTESocA-UKjs8y50puWGZSKgs31O-JGmOxesLgn1ljx20FNuhZQfsxQE3pWTO4HWSHmhYjlRlnX3jUixjoVpOsDuvRxlUKOIbNI8x96gG4Z&refresh_token=AQBR0PIzmZFGPrmR6Cl_lDBfTlCVIzdmMplygur8VHxDk3Vv-eqWPR_58Sl2WbgVcaFgCXJHi7_s6hv8Gcc_jytmYy-lgF3d9ZAPe_-1tI'

  var myOptions = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + accessToken
    },
    mode: 'cors',
    cache: 'default'
  };

  fetch(FETCH_URL, myOptions)
    .then(response => response.json())
    .then(json => {
      const artist = json.artists.items[0];
      this.setState({ artist });
      console.log('this.state', this.state);
    })
}

  render() {
    let artist = {
      name: '',
      followers: {
        total: ''
      }
    };
    if (this.state.artist !== null) {
      artist = this.state.artist;
    }
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
                value={this.state.query}
                onChange={event => {this.setState({query: event.target.value})}}
                onKeyPress={event => {
                  // if the user clicks enter or mouse click, call this.search()
                  // console.log('event.key: ', event.key)
                  if(event.key === 'Enter') {
                    // call this.search
                    this.search()
                  }
                }}
              />
              {/* react-bootstrap has some cool add-ons, this inputgroup.add-on changes the button icon on this form, find more in the react bootstrap documentation library */}
            {/* <InputGroup.Addon>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon> */}
            <Button onClick={()=> this.search()}>PLAY SOME MUSIC!</Button>
          </InputGroup>
        </FormGroup>
        <div className="Profile">
          <div>Artist: {artist.name}</div>
          <div>Followers: {artist.followers.total}</div>
        </div>
        <div className="Gallery">
          Gallery
        </div>
      </div>
    )
  }
  // render() {

  //   let artist = {
  //     name: '',
  //     followers: {
  //       total: ''
  //     }
  //   };
  //   if (this.state.artist !== null) {
  //     artist = this.state.artist;
  //   }

  //   return (
  //     // return JSX
  //     <div className="container">
  //       <hr />
  //       <div className="col-lg-6">
  //         <div className="input-group">
  //           <input type="text"
  //             onChange={event => { this.setState({ query: event.target.value }) }}
  //           className="form-control" placeholder="Search for..." />
  //           <span className="input-group-btn">
  //             <button
  //             onClick={()=> this.search()}
  //              className="btn btn-default" type="button">Go!</button>
  //           </span>
  //         </div>
  //       </div>
  //       <hr />
  //       <div>
  //         <div> {artist.name}   </div>
  //         <div> {artist.followers.total} </div>
  //       </div>


  //       </div>
  //   )
  // }
}

export default AudioPlayer;