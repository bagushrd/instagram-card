import React, { Component } from 'react';
import logo from './images/logo.svg';
import gag from './images/9gag.jpg';
import gagImage from './images/9gag-image.jpg';
import './styles/App.css';
import './styles/font-awesome-4.7.0/css/font-awesome.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <div className="card-container">
            <div className="title">
              <img src={gag} className="title-image" alt="card-title" />
              <span className="title-text">9 gag</span>
            </div>

            <div className="card-image">
              <img src={gagImage} alt="card" />
            </div>

            <div className="card-info">
              <div className="card-icons">
                <span><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                <span><i className="fa fa-comment-o" aria-hidden="true"></i></span>
              </div>
              <div className="card-icons-info">
                <span>205,147 likes</span>
              </div>
            </div>

            <div className="card-caption">
              <span className="card-username">9gag</span>
              <span className="card-caption-text">Live smarter every day.</span>
            </div>

            <div className="card-time">
              <span>9 hours</span>
              <div className="card-time-separator"></div>
            </div>

            <div className="card-comment">
              <input type="text" placeholder="Add a comment..." />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
