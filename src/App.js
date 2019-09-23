import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <ul>
          <li>Vali</li>
          <li>Beth</li>
          <li>Mona</li>
        </ul>
        <Person name="Vali" age="38" />
        <Person name="Bethany" age="33">
          <ul>My Hobbies:
            <li>Reading</li>
            <li>Riding</li>
            <li>Watching TV</li>
          </ul>
        </Person>
        <Person name="Mona" age="38" />
      </div>
    );
    // return React.createElement('div', null,
    //   React.createElement('h1', { className: 'App' }, 'Hi, I\'m React App!!!'));
  }
}

export default App;
