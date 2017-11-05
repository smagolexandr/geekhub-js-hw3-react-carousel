import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from 'nuka-carousel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Carousel>
          <img src="https://picsum.photos/1920/720/?random"/>
          <img src="https://picsum.photos/1920/1080/?random"/>
          <img src="https://picsum.photos/1920/1200/?random"/>
        </Carousel>
      </div>
    );
  }
}

export default App;
