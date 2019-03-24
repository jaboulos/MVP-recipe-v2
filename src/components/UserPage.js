import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
// import { FormGroup, FormControl, InputGroup, Glyphicon, Button } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



import Recipes from './Recipes';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeList: [],
      view: 'main',
    };
    // this.randomRecipe = this.randomRecipe.bind(this)
  }

  componentDidMount() {
    axios.get('/recipes', {
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
        this.setState({
          recipeList: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // randomRecipe() {
  //     axios.get('/random', {
  //       method: 'GET',
  //       mode: 'no-cors',
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //       .then((res) => {
  //         // eslint-disable-next-line prefer-destructuring
  //         const data = res.data;
  //         this.setState({
  //           recipeList: data,
  //         });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  // }

  renderView() {
    // const { schedule, ramsFeed, view } = this.state;
    const { recipeList, view } = this.state;
    if (view === 'main') {
      return (
        <div id="recipes">
          <Recipes
            recipeList={recipeList}
            // randomRecipe={this.randomRecipe}
          />
        <div className="random-button">
          <Button variant="outline-danger"><Link className="navbar-brand" to="/randomrecipe">GENERATE A RECIPE!!!!!</Link></Button>
        </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderView()}
      </div>
    );
  }
}

export default UserPage;