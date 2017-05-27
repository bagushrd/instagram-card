import React, { Component } from 'react';
import './styles/App.css';
import './styles/font-awesome-4.7.0/css/font-awesome.css';

import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="http://localhost:3000/images/logo.svg" className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Card
            userImage="http://localhost:3000/images/9gag.jpg"
            username="bagusherdiawan"
            cardImage="http://localhost:3000/images/9gag-image.jpg"
            totalLikes="10"
            totalLikesText="likes"
            caption="Live smarter every single day"
            cardTimePass="9 hours"
          />
        </div>
      </div>
    );
  }
}

export default App;
