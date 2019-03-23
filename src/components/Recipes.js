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
                <h2><strong>{item.email}</strong></h2>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default Recipes;