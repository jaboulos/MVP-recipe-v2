import React from 'react';
import AppNavbar from './components/AppNavbar';
import AudioPlayer from './components/AudioPlayer'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
  return (
    <div>
      <AppNavbar />
      <AudioPlayer />
      { props.children }
      {/* <Homepage /> */}
      {/* props.children returns the child components on index.js */}
    </div>
  )
}

export default App