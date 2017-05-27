import React, { Component } from 'react';
import './styles/App.css';
import './styles/font-awesome-4.7.0/css/font-awesome.css';
import CardContainer from './containers/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="http://localhost:3000/images/logo.svg" className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <CardContainer />
        </div>
      </div>
    );
  }
}

export default App;
