import React from 'react';
// import { listenerCount } from 'cluster';
import '../App.css';

const Recipes = ({recipeList}) => (
  <div className="recipe-page">
    <table className="table">

      <tbody>
        {recipeList.map(item =>(
          <tr key={item._id}>
            <td>
              <div>
                <img className="rounded-circle" width={300} height={300} src={`${item.recipeImage}`} />
              </div>
              <div>
                <h2><strong>RECIPE SUBMITTED BY:<h5>{item.email}</h5> </strong></h2>
              </div>
              <div>
                <h5><strong>NAME: </strong></h5>{item.recipesName}
              </div>
              <div>
                <h5><strong>COOK TIME: </strong></h5>{item.recipeTime} minutes
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
    {/* <div><button type="submit" className="btn btn-primary">{randomRecipe}</button></div> */}
  </div>
)

export default Recipes;