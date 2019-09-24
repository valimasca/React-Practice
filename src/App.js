import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Vali', age: 38 },
      { name: 'Beth', age: 33 },
      { name: 'Mona', age: 38 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    //console.log('Was clicked!');
    this.setState({
      persons: [
        { name: 'Valer', age: 38 },
        { name: 'Beth', age: 33 },
        { name: 'Ramona', age: 33 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h3>I'm a real React App and I'm working!!!</h3>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
          <ul>My Hobbies:
            <li>Reading</li>
            <li>Ridding</li>
            <li>Watching TV</li>
          </ul>
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
