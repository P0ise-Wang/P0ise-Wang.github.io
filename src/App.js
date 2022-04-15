import React, { Component } from 'react';
import './App.css';
import Visualizer from './Visualizer';
import "jquery/dist/jquery"
import "jquery/dist/jquery.min"
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Visualizer></Visualizer>
      </div>
    );
  }

}

export default App;
