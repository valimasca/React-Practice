import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <ol>
          <li>Vali</li>
          <li>Beth</li>
          <li>Mona</li>
        </ol>
      </div>
    );
    // return React.createElement('div', null,
    //   React.createElement('h1', { className: 'App' }, 'Hi, I\'m React App!!!'));
  }
}

export default App;
