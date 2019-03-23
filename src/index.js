import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';
import Homepage from '../src/components/Homepage';
// import SignUp from './components/SignUp';
import SignIn from '../src/components/SignIn';
import Dashboard from '../src/components/Dashboard';
// import Recipes from './components/Recipes';
import UserPage from '../src/components/UserPage';

// ReactDOM.render(
//     <BrowserRouter>
//       <App>
//         <Route exact path="/" component={Homepage}/>
//         {/* <Route exact path="/signup" component={SignUp}/> */}
//         <Route exact path="/signin" component={SignIn}/>
//         <Route exact path="/dashboard" component={Dashboard}/>
//       </App>
//     </BrowserRouter>,
//   document.querySelector('#root'));

// serviceWorker.unregister();

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route exact path="/" component={Homepage}/>
      {/* <Route exact path="/signup" component={SignUp}/> */}
      <Route exact path="/signin" component={SignIn}/>
      {/* <Route exact path="/recipes" component={Recipes}/> */}
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/userpage" component={UserPage}/>
    </App>
  </BrowserRouter>,
document.querySelector('#root'));

serviceWorker.unregister();
