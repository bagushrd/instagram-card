import React, { Component } from 'react';
import logo from './images/logo.svg';
import './styles/App.css';
import './styles/font-awesome-4.7.0/css/font-awesome.css';

import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Card
            userImage="http://localhost:3000/static/media/9gag.180f7510.jpg"
            username="bagusherdiawan"
            cardImage="http://localhost:3000/static/media/9gag-image.ff254517.jpg"
            totalLikes="205, 954 likes"
            caption="Live smarter every single day"
            cardTimePass="9 hours"
          />
        </div>
      </div>
    );
  }
}

export default App;
