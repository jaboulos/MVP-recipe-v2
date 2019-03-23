import React, { Component } from 'react';
import axios from 'axios';



import Recipes from './Recipes';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeList: [],
      view: 'main',
    };
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

  renderView() {
    // const { schedule, ramsFeed, view } = this.state;
    const { recipeList, view } = this.state;
    if (view === 'main') {
      return (
        <div id="recipes">
          <Recipes
            recipeList={recipeList}
          />
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