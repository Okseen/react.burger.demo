import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26},
    ],
    otherState: 'some other value'
  }

  swithcNameHandler = () => {
    //console.log('Was clicked!');
    //this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        {name: "Cucumber", age: 30},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 26},
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I a'm React App</h1>
        <p>This is really working!</p>
        <button onClick={this.swithcNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
