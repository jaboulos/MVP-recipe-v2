import React, { Component } from 'react';
import '../App.css';

import axios from 'axios';
// import { Link } from 'react-router-dom';


import RandomComponent from './RandomComponent';

class RandomRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomList: [],
      view: 'random',
    };
    // this.randomRecipe = this.randomRecipe.bind(this)
    this.refreshPage = this.refreshPage.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    axios.get('/random', {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        // eslint-disable-next-line prefer-destructuring
        const data = res.data;
        console.log('data : ', data)
        this.setState({
          randomList: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderView() {
    // const { schedule, ramsFeed, view } = this.state;
    const { randomList, view } = this.state;
    if (view === 'random') {
      return (
        <div id="recipes">
          <RandomComponent
            randomList={randomList}
            // randomRecipe={this.randomRecipe}

          />
        </div>
      );
    }
  }

  refreshPage(){
    window.location.reload();
}

  render() {
    return (
      <div>
        {this.renderView()}
        {/* <div className="random-button"><button onClick={this.refreshPage}><span>GET ANOTHER RECIPE!!!!</span> </button></div> */}
        <div className="random-button"><button onClick={this.componentDidMount}><span>GET ANOTHER RECIPE!!!!</span> </button></div>
      </div>
    );
  }
}

export default RandomRecipe;