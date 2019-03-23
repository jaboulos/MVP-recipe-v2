import React, { Component } from 'react';
// import { listenerCount } from 'cluster';

const Recipes = ({recipeList}) => (
  <div>
    <table className="table">
      <thead>
        <tr>
          <th scope="col" />
        </tr>
      </thead>

      <tbody>
        {recipeList.map(item =>(
          <tr key={item.id}>
            <td>
              <div>
                <h2><strong>RECIPE SUBMITTED BY:<h5>{item.email}</h5> </strong></h2>
              </div>
              <div>
                <h5><strong>NAME: </strong></h5>{item.recipesName}
              </div>
              <div>
                <h5><strong>COOK TIME: </strong></h5>{item.recipeTime}
              </div>
              <div>
                <h5><strong>INGREDIENTS:</strong></h5> {item.recipeIngredients}
              </div>
              <div>
                <h5><strong>INSTRUCTIONS: </strong></h5>
                {item.recipeInstructions}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default Recipes;